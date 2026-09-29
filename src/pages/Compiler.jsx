import { useState } from "react"

function Compiler() {
  const [source, setSource] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    if (!source.trim()) return

    // Mock equivalent of:
    // POST /api/compiler/compile
    setSubmitted(true)
  }

  return (
    <main
      className="min-w-0 flex-1 overflow-auto"
      style={{ background: "var(--page)" }}
    >
      <div className="px-8 py-6">
        <div className="mb-6">
          <h1
            className="text-[20px] font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Compiler
          </h1>

          <p
            className="mt-1 text-[13px]"
            style={{ color: "var(--text-secondary)" }}
          >
            Submit JOCKY language source code to the compiler
          </p>
        </div>

        <section
          className="pt-6"
          style={{ borderTop: "1px solid var(--hairline)" }}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label
                htmlFor="source"
                className="text-[12px] font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                JOCKY source
              </label>
            </div>

            <textarea
              id="source"
              value={source}
              onChange={(event) => {
                setSource(event.target.value)
                setSubmitted(false)
              }}
              placeholder="Enter JOCKY source code..."
              spellCheck={false}
              className="min-h-[320px] w-full resize-y p-3 font-mono text-[12px]"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--hairline)",
                borderRadius: "var(--radius-control)",
              }}
            />

            <div className="mt-4 flex items-center gap-4">
              <button
                type="submit"
                disabled={!source.trim()}
                className="h-8 px-3 text-[12px]"
                style={{
                  color: "var(--surface)",
                  background: "var(--accent)",
                  border: "1px solid var(--accent)",
                  borderRadius: "var(--radius-control)",
                }}
              >
                Submit source
              </button>

              {submitted && (
                <span
                  className="text-[12px]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Source submitted
                </span>
              )}
            </div>
          </form>
        </section>
      </div>
    </main>
  )
}

export default Compiler