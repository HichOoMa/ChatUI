import Message from '../components/message';
import SendField from '../components/sendField';

const Messages = () => {
  const d = new Date();
  return (
    <main className="h-full w-full relative">
      <div className="p-4">
        <Message
          username={'Hamed'}
          userphotoUrl={'https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png'}
          content={'ooooooooo allaowska test test test'}
          date={d}
          showDetails={false}
        />
        <Message
          username={'Hamed'}
          userphotoUrl={'https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png'}
          content={'ooooooooo allaowska test test test'}
          date={d}
          showDetails={true}
        />
      </div>
      <SendField />
    </main>
  );
};
export default Messages;
