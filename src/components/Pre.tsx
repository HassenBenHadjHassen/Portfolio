function Pre(props: { load: boolean }) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
