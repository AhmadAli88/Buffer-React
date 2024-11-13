
import { Buffer } from 'buffer';

const HexEncodingExample = () => {
  const text = "Secret Message!";
  const hexEncoded = Buffer.from(text, 'utf-8').toString('hex');

  return (
    <div>
      <p>Original Text: {text}</p>
      <p>Hex Encoded: {hexEncoded}</p>
    </div>
  );
};

export default HexEncodingExample;
