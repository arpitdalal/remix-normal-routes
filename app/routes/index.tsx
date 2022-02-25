import {
  Form,
  Link,
} from 'remix';

const Index = () => {
  return (
    <>
      <Link to="/bar">Go to Bar route</Link>
      <h1>Index Route</h1>
      <Form action="/" method="post">
        <input type="hidden" name="redirectTo" value="/" />
        <input type="text" name="name" value="foo" />
        <button type="submit">Submit</button>
      </Form>
      <Link to="/">reset url</Link>
      <p>
        Submitting this form must add <code>?name=foo</code> to the url
      </p>
    </>
  );
};

export default Index;
