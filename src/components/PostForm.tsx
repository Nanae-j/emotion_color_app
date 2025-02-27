const PostForm = () => {
  return (
    <div className="mb-20">
      <form action="">
        <textarea
          name=""
          id=""
          placeholder="Share your thoughts and feelings..."
          className="h-32 w-full resize-none rounded-2xl border-1 border-[#f5f5f5] bg-white p-3"
        />
        <div className="my-5 flex items-center gap-5">
          {/* 各色 */}
          <div>
            <input
              type="checkbox"
              id="color"
              value="color"
              className="sr-only" // デフォルトのチェックボックスを非表示
            />
            <div className="inline-block">
              <label
                htmlFor="color"
                className="flex cursor-pointer flex-col items-center"
              >
                <div
                  className={`bg-red h-12 w-12 rounded-full transition-all`}
                ></div>
              </label>
            </div>
          </div>
          {/* 各色 */}
          <div>
            <input
              type="checkbox"
              id="color-blue"
              value="color-blue"
              className="sr-only" // デフォルトのチェックボックスを非表示
            />
            <div className="inline-block">
              <label
                htmlFor="color-blue"
                className="flex cursor-pointer flex-col items-center"
              >
                <div
                  className={`bg-blue h-12 w-12 rounded-full transition-all`}
                ></div>
              </label>
            </div>
          </div>
          {/* 各色 */}
        </div>
        <button className="rounded-md bg-white px-1 py-3">COLOR IT ...</button>
      </form>
    </div>
  );
};

export default PostForm;
