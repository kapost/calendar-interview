export default function applyHOCs(...hocs) {
  return (Component) => {
    let wrappedComponent = Component;

    hocs.reverse().forEach((hoc) => {
      wrappedComponent = hoc(wrappedComponent);
    });

    return wrappedComponent;
  };
}
