
import { Buffer } from 'buffer';

const Base64Example = () => {
  const encodeData = (text) => Buffer.from(text, 'utf-8').toString('base64');
  const decodeData = (base64) => Buffer.from(base64, 'base64').toString('utf-8');

  const originalText = "Hello, Buffer!";
  const encoded = encodeData(originalText);
  const decoded = decodeData(encoded);

  return (
    <div>
      <p>Original: {originalText}</p>
      <p>Encoded: {encoded}</p>
      <p>Decoded: {decoded}</p>
    </div>
  );
};

export default Base64Example;
