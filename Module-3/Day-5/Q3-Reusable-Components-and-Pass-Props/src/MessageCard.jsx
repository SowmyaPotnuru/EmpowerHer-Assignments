function MessageCard(props) {
  return (
    <div>
      <h2>Title: {props.title}</h2>
      <p><b>Message:</b> {props.message}</p>
    </div>
  );
}
export default MessageCard;
