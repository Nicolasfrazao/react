// @compilationMode(infer)
function Component(props) {
  const result = f(props);
  function helper() {
    return <foo />;
  }
  helper();
  return result;
}

function f(props) {
  return props;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{}],
};
