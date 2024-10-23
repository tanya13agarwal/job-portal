import RenderSteps from "./RenderSteps"

export default function AddCourse() {
  return (
    <>
      <div className="flex w-full items-start gap-x-6">
        <div className="flex flex-1 flex-col">
          <h1 className="mb-10 text-3xl font-medium text-black">
            Post A New Job
          </h1>
          <div className="flex-1">
            <RenderSteps />
          </div>
        </div>
        {/* Course Upload Tips */}
        <div className="sticky top-10 hidden max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 xl:block">
          <p className="mb-8 text-lg text-richblack-5">⚡ Job Post Tips</p>
          <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
          </ul>
        </div>
      </div>
    </>
  )
}