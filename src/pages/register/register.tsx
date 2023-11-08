export default function Register() {
  return (
    <div className="w-[800px] h-[400px] bg-primary rounded-sm">
      <div className="flex">
        <span className="">Username</span>
        <input type="text" />
      </div>
      <div className="flex">
        <span className="">Password</span>
        <input type="password" />
      </div>
    </div>
  );
}
