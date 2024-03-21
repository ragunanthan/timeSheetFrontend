function CurrentUser() {
  return (
    <div className="flex flex-row gap-3 items-center">
      <img
        className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
        src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <p className="text-xl text-white">Jhon</p>
    </div>
  );
}

export default CurrentUser;
