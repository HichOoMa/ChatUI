interface Props {
  name: string;
  lastMsg: string;
  profilePhoto: string;
  isOnline: boolean;
}
const showedText = (text: string, isName: boolean) => {
  if (text.length > 18 && isName) {
    return text.slice(0, 16) + '...';
  } else if (text.length > 24 && !isName) {
    return text.slice(0, 22) + '...';
  }
  return text;
};
const Friend = ({ name, lastMsg, profilePhoto, isOnline }: Props) => {
  return (
    <div
      className="flex justify-start items-center gap-x-3 p-2 delay-75 cursor-pointer hover:bg-base-200"
      title={name}>
      <div className={`avatar  ${isOnline ? 'online' : 'offline'}`}>
        <div className="h-10 rounded-full">
          <img src={profilePhoto} />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <span className="font-bold">{showedText(name, true)}</span>
        <span className="text-sm">{showedText(lastMsg, false)}</span>
      </div>
    </div>
  );
};
export default Friend;
