import './Email.css';

function Email() {
  return (
    <div className="email-main">
      <form>
        <input type="email" name="email" id="email" placeholder="Email" />
        <textarea name="message" id="message" placeholder="Message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Email;
