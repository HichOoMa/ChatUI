import { useState } from 'react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const SendField = () => {
  const [msg, setMsg] = useState('');
  return (
    <div className="fixed bottom-0 right-0 w-[calc(100%-15rem)] p-4">
      <div className="w-full flex gap-5 bg-base-100 rounded-full p-2">
        <input
          type="text"
          placeholder="Type here"
          className="input bg-transparent outline-none w-full rounded-full"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button className="btn btn-circle bg-base-200 hover:bg-base-300">
          <EmojiEmotionsIcon />
        </button>
        <button disabled={msg === ''} className="btn btn-primary rounded-full">
          Send
        </button>
      </div>
    </div>
  );
};

export default SendField;
