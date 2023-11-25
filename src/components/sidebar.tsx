import Friend from './friend';

const Sidebar = () => {
  return (
    <div className="h-[calc(100vh-4rem)] w-60 fixed bg-base-100">
      <Friend
        name={'Haithem BenHammouda'}
        lastMsg={'test last message aaaaaaa'}
        profilePhoto={'https://www.shareicon.net/data/256x256/2016/05/26/771188_man_512x512.png'}
        isOnline={false}
      />
    </div>
  );
};

export default Sidebar;
