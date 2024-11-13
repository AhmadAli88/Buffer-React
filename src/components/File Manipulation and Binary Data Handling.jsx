import  { useState } from 'react';
import { Buffer } from 'buffer';

const FileBufferExample = () => {
  const [imageUrl, setImageUrl] = useState('');
console.log("imageUrl", imageUrl)
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = () => {
      const buffer = Buffer.from(reader.result);
      const base64Image = buffer.toString('base64');
      setImageUrl(`data:image/jpeg;base64,${base64Image}`);
    };
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
    </div>
  );
};

export default FileBufferExample;
