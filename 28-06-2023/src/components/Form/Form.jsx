import "./index.css";

const Form = () => {
  return (
    <form>
      <div>
        <input placeholder="Email" type="email" id="email" required />
      </div>
      <div>
        <input placeholder="Password" type="password" id="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Form;
