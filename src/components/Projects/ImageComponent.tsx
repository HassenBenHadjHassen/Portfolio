import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";
import { Card } from "react-bootstrap";

const ImageComponent = (props: { src: string; hash: string }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setLoaded(true);
    };

    image.src = props.src;
  }, [props.src]);

  return (
    <>
      <div style={{ display: loaded ? "none" : "inline" }}>
        <Blurhash
          hash={props.hash}
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <Card.Img
        variant="top"
        src={props.src}
        alt="card-img"
        style={{ display: loaded ? "inline" : "none" }}
      />
    </>
  );
};

export default ImageComponent;
