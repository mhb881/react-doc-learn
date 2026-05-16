import { useEffect } from "react";
import { createConnection } from "./chat";

function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
  }, []);
  return <h3>欢迎来到聊天室！</h3>;
}

export default ChatRoom;
