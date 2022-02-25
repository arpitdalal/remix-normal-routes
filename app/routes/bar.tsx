import {
  Form,
  Link,
} from 'remix';

const Bar = () => {
  return (
    <>
      <Link to="/">Go to Index route</Link>
      <h1>Bar Route</h1>
      <Form action="/" method="post">
        <input type="hidden" name="redirectTo" value="/bar" />
        <input type="text" name="name" value="foo" />
        <button type="submit">Submit</button>
      </Form>
      <Link to="/bar">reset url</Link>
      <p>
        Submitting this form must add <code>?name=foo</code> to the url
      </p>
    </>
  );
};

export default Bar;
