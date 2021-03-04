import React from "react";
import { ChatEngine, ChatFeed } from "react-chat-engine";

import "./App.css";

function App() {
	return (
		<ChatEngine
			height="100vh"
			projectID="6c612725-771a-4f57-ac80-881a71ded12d"
			userName="iamdevshubham"
			userSecret="Verma123@"
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
}

export default App;
