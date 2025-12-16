function UserInfo(props) {
  return (
    <div>
      <h1>My name is {props.name}.</h1>
      <p>I am {props.age} years old.</p>
    </div>
  );
}

export default UserInfo;
