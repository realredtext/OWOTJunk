let customTags = { //"opening": "closing",
    "<bold_italic>": "</bold_italic>",
    "<red>": "</red>",
    "<green>": "</green>",
    "<blue>": "</blue>", //just use <b> tags around a color tag for colored bold tags
    "<und>": "</und>" //attributes are still escaped
};

let customTagsHTML = {
    "<b><i>": "</b></i>",
    `<span style="color: #F00">`: "</span>",
    `<span style="color: #0F0">`: "</span>",
    `<span style="color: #00F">`: "</span>",
    `<span style="text-decoration: underline">`: "</span>"
};

function multiReplace(string, searchVals, replaceVals) { //both are arrays
    for(let i = 0; i < searchVals.length; i++) {
        string = string.replaceAll(searchVals[i], replaceVals[i]);
    };

    return string;
};

function addChat(chatfield, id, type, nickname, message, realUsername, op, admin, staff, color, date, dataObj) {
	if(!dataObj) dataObj = {};
	if(!nickname) nickname = "";
	if(!message) message = "";
	if(!realUsername) realUsername = "";
	if(!color) color = assignColor(nickname);
	var dateStr = "";
	if(date) dateStr = convertToDate(date);
	var field = evaluateChatfield(chatfield);
	var pm = dataObj.privateMessage;
	var isGreen = false;

	if(chatLimitCombChars) {
		message = w.split(message);
		for(var i = 0; i < message.length; i++) {
			message[i] = message[i].slice(0, 5);
		}
		message = message.join("");
	}

	if(chatGreentext && message[0] == ">" && !(":;_-".includes(message[1]))) { // exception to some emoticons
		message = message.substr(1);
		isGreen = true;
	}

	if(!op) {
		message = html_tag_esc(message);
		nickname = html_tag_esc(nickname);
	};
    //not all tags are bad
    message = multiReplace(message, html_tag_esc(Object.keys(customTags)), Object.keys(customTags));
    message = multiReplace(message, html_tag_esc(values(customTags)), values(customTags));
    
    message = multiReplace(message, Object.keys(customTags), Object.keys(customTagsHTML));
    message = multiReplace(message, Object.values(customTags), Object.values(customTagsHTML));

	// do not give the tag to [ Server ]
	var hasTagDom = (op || admin || staff || dataObj.rankName) && !(!id && op);

	var tagDom;
	var nickTitle = [];

	if(type == "user" || type == "user_nick") {
		nickTitle.push("ID " + id);
	}

	if(hasTagDom) {
		tagDom = document.createElement("span");
		if(dataObj.rankName) {
			tagDom.innerHTML = "(" + dataObj.rankName + ")";
			tagDom.style.color = dataObj.rankColor;
			tagDom.style.fontWeight = "bold";
			nickTitle.push(dataObj.rankName);
		} else if(op) {
			tagDom.innerHTML = "(OP)";
			tagDom.style.color = "#0033cc";
			tagDom.style.fontWeight = "bold";
			nickTitle.push("Operator");
		} else if(admin) {
			tagDom.innerHTML = "(A)";
			tagDom.style.color = "#FF0000";
			tagDom.style.fontWeight = "bold";
			nickTitle.push("Administrator");
		} else if(staff) {
			tagDom.innerHTML = "(M)";
			tagDom.style.color = "#009933";
			tagDom.style.fontWeight = "bold";
			nickTitle.push("Staff");
		}
		tagDom.innerHTML += "&nbsp;";
	}

	var idTag = "";

	var nickDom = document.createElement("a");
	nickDom.style.textDecoration = "underline";

	if(type == "user") {
		nickDom.style.color = color;
		nickDom.style.fontWeight = "bold";
		nickDom.style.pointerEvents = "default";
		if(state.userModel.is_operator) idTag = "[" + id + "]";
	}
	if(type == "anon_nick") {
		idTag = "[*" + id + "]"
	}
	if(type == "anon") {
		idTag = "[" + id + "]"
	}
	if(type == "user_nick") {
		nickDom.style.color = color;
		nickTitle.push("Username \"" + realUsername + "\"");
		if(state.userModel.is_operator) idTag = "[*" + id + "]";
	}

	if(state.userModel.is_operator) {
		idTag = "<span style=\"color: black; font-weight: normal;\">" + idTag + "</span>"
	}

	if(idTag && type != "anon") idTag += "&nbsp;"; // space between id and name

	if(id == 0) {
		idTag = "";
		nickname = "<span style=\"background-color: #e2e2e2;\">" + nickname + "</span>";
	}

	nickname = idTag + nickname;

	if(dateStr) nickTitle.push("(" + dateStr + ")");

	nickDom.innerHTML = nickname + (pm == "to_me" ? "" : ":");
	if(nickTitle.length) nickDom.title = nickTitle.join("; ");

	var pmDom = null;
	if(pm) {
		pmDom = document.createElement("div");
		pmDom.style.display = "inline";
		if(pm == "to_me") {
			pmDom.innerText = " -> Me:";
		} else if(pm == "from_me") {
			pmDom.innerText = "Me -> ";
		}
	}

	if(isGreen) {
		message = "<span style=\"color: #789922\">&gt;" + message + "</span>";
	}

	emote_parse: if(chatEmotes) {
		var emote_split = message.split(":");
		if(emote_split.length < 3) break emote_parse;
		var parsed = [];

		for(var i = 0; i < (emote_split.length - 1); ++i) {
			if(i % 2 == 0) { // isn't between two : chars
				parsed.push(emote_split[i]);
			} else if(emoteList.hasOwnProperty(emote_split[i])) { // good emote
				var position = emoteList[emote_split[i]];
				parsed.push("<div title=':" + emote_split[i]
					+ ":' class='chat_emote' style='background-position-x:-" + position[0]
					+ "px;width:" + position[1] + "px'></div>");
			} else { // invalid emote
				parsed.push(":" + emote_split[i] + ":");
			}
		}

		if (emote_split.length % 2 == 0) parsed.push(":")
		parsed.push(emote_split[emote_split.length - 1])
		message = parsed.join("");
	}

	var msgDom = document.createElement("span");
	msgDom.innerHTML = "&nbsp;" + message;

	var maxScroll = field.scrollHeight - field.clientHeight;
	var scroll = field.scrollTop;
	var doScrollBottom = false;
	if(maxScroll - scroll < 20) { // if scrolled at least 20 pixels above bottom
		doScrollBottom = true;
	}

	var chatGroup = document.createElement("div");
	if(!pm && hasTagDom) chatGroup.appendChild(tagDom);
	if(pmDom) {
		if(pm == "to_me") {
			if(hasTagDom) chatGroup.appendChild(tagDom);
			chatGroup.appendChild(nickDom);
			chatGroup.appendChild(pmDom);
		} else if(pm == "from_me") {
			chatGroup.appendChild(pmDom);
			if(hasTagDom) chatGroup.appendChild(tagDom);
			chatGroup.appendChild(nickDom);
		}
	} else {
		chatGroup.appendChild(nickDom);
	}
	chatGroup.appendChild(msgDom);

	field.appendChild(chatGroup);

	maxScroll = field.scrollHeight - field.clientHeight;
	if(doScrollBottom) {
		field.scrollTop = maxScroll;
	}
	chatRecords.push({
		id: id, date: date, field: field,
		element: chatGroup
	});
}
