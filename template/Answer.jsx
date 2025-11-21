import "./index.css";
// If you add an image to src/assets, import it here:
// import uploadIllustration from "./assets/upload-illustration.png";

const steps = [
  {
    title: "Select an image",
    description:
      "Click the upload button and choose an image from your device. Use JPG or PNG for best results!",
  },
  {
    title: "Run quick checks",
    description:
      "Verify the image is not blurry, cropped too tightly, or containing multiple moles. Our UI can show a simple preview.",
  },
  {
    title: "Send image to the model",
    description:
      "When you click “Analyze”, the frontend sends the image to the backend API, which forwards it to the [related-dataset] classifier.",
  },
  {
    title: "Review model prediction",
    description:
      "Display the predicted class with a confidence score and a short explanation of what that means.",
  },
  {
    title: "Decide next steps",
    description:
      "Encourage users to talk to a clinician. Include links to educational resources and clearly state that this is not a diagnosis.",
  },
];

function StepCard({ index, title, description }) {
  const stepNumber = String(index + 1);

  return (
    <article className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm">
      <div className="flex h-9 w-8 shrink-0 items-center justify-center rounded-full bg-sky-500 text-sm font-semibold text-slate-950">
        {stepNumber}
      </div>
      <div>
        <h3 className="text-base font-semibold text-slate-50">{title}</h3>
        <p className="mt-1 text-sm text-slate-300">{description}</p>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center">
      <main className="w-full max-w-6xl px-4 py-10">
        {/* Header */}
        <header className="mb-8">
          <p className="text-sm font-semibold text-sky-400 tracking-wide uppercase">
            Welcome to the Spider Webs & Dev Workshop
          </p>
          <h1 className="mt-2 text-3xl font-bold">
            Uploading an Image to a Model
          </h1>
          <p className="mt-2 text-slate-300 max-w-2xl text-sm">
            Today we will be going over a simple interface that can be used for your model!
            Each card on the left represents a step that will
            guide the user on uploading an image to your ML model.
          </p>
        </header>

        {/* Layout: steps left, image right */}
        <section className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)] items-start">
          {/* Left: dynamic cards */}
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <StepCard
                key={step.title}
                index={idx}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>

          {/* Right: illustration / mock preview */}
          <aside className="relative">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-slate-200">
                  Upload Preview
                </h2>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-[11px] uppercase text-slate-300">
                  [Dataset Name]
                </span>
              </div>

              {/* Fake upload area */}
              <div className="aspect-video rounded-2xl border border-dashed border-slate-700 bg-slate-950/60 flex items-center justify-center mb-4">
                <div className="text-center text-slate-400 text-sm">
                  <span className="block text-lg mb-1">🕸️</span>
                  Drop an image here or click “Upload”
                </div>
              </div>

              {/* Fake controls */}
              <div className="space-y-3 text-sm">
                <button className="w-full rounded-xl bg-sky-500 px-4 py-2 font-semibold text-slate-950 hover:bg-sky-400">
                  Upload Image
                </button>
                <button className="w-full rounded-xl border border-slate-700 px-4 py-2 font-semibold text-slate-200 hover:bg-slate-800">
                  Analyze with Model
                </button>
                <p className="text-xs text-slate-400">
                  This is only a UI mockup. In a fully finished project, the “Analyze”
                  button would call your FastAPI / Flask / Node backend and
                  return the model prediction.
                </p>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
