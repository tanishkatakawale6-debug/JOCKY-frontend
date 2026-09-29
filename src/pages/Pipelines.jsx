import { useState } from "react"

const pipelines = [
  {
    id: "pipe-001",
    status: "SUCCESS",
    artifact_id: "artifact-001",
  },
  {
    id: "pipe-002",
    status: "SUCCESS",
    artifact_id: "artifact-002",
  },
  {
    id: "pipe-003",
    status: "IN_PROGRESS",
    artifact_id: null,
  },
]

const stages = [
  "COMPILE",
  "SEMANTIC_CHECK",
  "LLVM_IR",
  "NATIVE_ARTIFACT",
  "TEST",
  "SECURITY_CHECK",
  "VERSIONING",
  "DEPLOYMENT",
]

function statusColor(status) {
  if (status === "SUCCESS") return "var(--state-success)"
  if (status === "FAILED") return "var(--state-critical)"
  if (status === "IN_PROGRESS") return "var(--state-warning)"
  return "var(--text-muted)"
}

function Pipelines() {
  const [selectedPipeline, setSelectedPipeline] = useState(pipelines[0])

  const successful = pipelines.filter(
    (pipeline) => pipeline.status === "SUCCESS"
  ).length

  const running = pipelines.filter(
    (pipeline) => pipeline.status === "IN_PROGRESS"
  ).length

  const failed = pipelines.filter(
    (pipeline) => pipeline.status === "FAILED"
  ).length

  return (
    <main
      className="min-w-0 flex-1 overflow-auto"
      style={{ background: "var(--page)" }}
    >
      <div className="px-8 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1
            className="text-[20px] font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Pipelines
          </h1>

          <p
            className="mt-1 text-[13px]"
            style={{ color: "var(--text-secondary)" }}
          >
            Monitor compilation and controlled artifact deployment runs
          </p>
        </div>

        {/* Summary */}
        <section
          className="mb-8 flex w-full"
          style={{
            borderTop: "1px solid var(--hairline)",
            borderBottom: "1px solid var(--hairline)",
          }}
        >
          <div className="flex-1 py-3">
            <div
              className="text-[12px]"
              style={{ color: "var(--text-muted)" }}
            >
              Total pipelines
            </div>
            <div
              className="mt-1 font-mono text-[28px]"
              style={{ color: "var(--text-primary)" }}
            >
              {pipelines.length}
            </div>
          </div>

          <div
            className="w-px"
            style={{ background: "var(--hairline)" }}
          />

          <div className="flex-1 px-4 py-3">
            <div
              className="text-[12px]"
              style={{ color: "var(--text-muted)" }}
            >
              Successful
            </div>
            <div
              className="mt-1 font-mono text-[28px]"
              style={{ color: "var(--text-primary)" }}
            >
              {successful}
            </div>
          </div>

          <div
            className="w-px"
            style={{ background: "var(--hairline)" }}
          />

          <div className="flex-1 px-4 py-3">
            <div
              className="text-[12px]"
              style={{ color: "var(--text-muted)" }}
            >
              In progress
            </div>
            <div
              className="mt-1 font-mono text-[28px]"
              style={{ color: "var(--text-primary)" }}
            >
              {running}
            </div>
          </div>

          <div
            className="w-px"
            style={{ background: "var(--hairline)" }}
          />

          <div className="flex-1 px-4 py-3">
            <div
              className="text-[12px]"
              style={{ color: "var(--text-muted)" }}
            >
              Failed
            </div>
            <div
              className="mt-1 font-mono text-[28px]"
              style={{ color: "var(--text-primary)" }}
            >
              {failed}
            </div>
          </div>
        </section>

        {/* Pipeline table */}
        <section className="mb-8">
          <div
            className="mb-3 text-[13px] font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Pipeline runs
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr
                  style={{
                    height: "34px",
                    background: "var(--surface)",
                    borderBottom: "1px solid var(--hairline)",
                  }}
                >
                  <th
                    className="px-3 text-left text-[12px] font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Pipeline
                  </th>

                  <th
                    className="px-3 text-left text-[12px] font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Status
                  </th>

                  <th
                    className="px-3 text-left text-[12px] font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Artifact
                  </th>
                </tr>
              </thead>

              <tbody>
                {pipelines.map((pipeline) => {
                  const selected = selectedPipeline.id === pipeline.id

                  return (
                    <tr
                      key={pipeline.id}
                      onClick={() => setSelectedPipeline(pipeline)}
                      tabIndex={0}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          setSelectedPipeline(pipeline)
                        }
                      }}
                      className="cursor-pointer"
                      style={{
                        height: "34px",
                        background: selected
                          ? "var(--surface)"
                          : "transparent",
                        borderBottom: "1px solid var(--hairline)",
                      }}
                    >
                      <td className="px-3">
                        <span
                          className="font-mono text-[12px]"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {pipeline.id}
                        </span>
                      </td>

                      <td className="px-3">
                        <span className="flex items-center gap-2">
                          <span
                            aria-hidden="true"
                            className="h-[6px] w-[6px] shrink-0 rounded-full"
                            style={{
                              background: statusColor(pipeline.status),
                            }}
                          />

                          <span
                            className="font-mono text-[12px]"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {pipeline.status}
                          </span>
                        </span>
                      </td>

                      <td className="px-3">
                        <span
                          className="font-mono text-[12px]"
                          style={{
                            color: pipeline.artifact_id
                              ? "var(--text-secondary)"
                              : "var(--text-muted)",
                          }}
                        >
                          {pipeline.artifact_id || "—"}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Inspector */}
        <section
          className="pt-6"
          style={{ borderTop: "1px solid var(--hairline)" }}
        >
          <div className="mb-4">
            <div
              className="text-[13px] font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Pipeline inspection
            </div>

            <div
              className="mt-1 text-[12px]"
              style={{ color: "var(--text-muted)" }}
            >
              {selectedPipeline.id}
            </div>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-3">
            <div>
              <div
                className="text-[12px]"
                style={{ color: "var(--text-muted)" }}
              >
                Pipeline ID
              </div>
              <div
                className="mt-1 font-mono text-[12px]"
                style={{ color: "var(--text-primary)" }}
              >
                {selectedPipeline.id}
              </div>
            </div>

            <div>
              <div
                className="text-[12px]"
                style={{ color: "var(--text-muted)" }}
              >
                Status
              </div>
              <div className="mt-1 flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-[6px] w-[6px] rounded-full"
                  style={{
                    background: statusColor(selectedPipeline.status),
                  }}
                />
                <span
                  className="font-mono text-[12px]"
                  style={{ color: "var(--text-primary)" }}
                >
                  {selectedPipeline.status}
                </span>
              </div>
            </div>

            <div>
              <div
                className="text-[12px]"
                style={{ color: "var(--text-muted)" }}
              >
                Artifact
              </div>
              <div
                className="mt-1 font-mono text-[12px]"
                style={{ color: "var(--text-primary)" }}
              >
                {selectedPipeline.artifact_id || "—"}
              </div>
            </div>
          </div>

          {/* Stage inspection */}
          <div>
            <div
              className="mb-3 text-[13px] font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Stage inspection
            </div>

            <div
              className="overflow-x-auto"
              style={{ borderTop: "1px solid var(--hairline)" }}
            >
              <table className="w-full border-collapse">
                <thead>
                  <tr
                    style={{
                      height: "34px",
                      background: "var(--surface)",
                      borderBottom: "1px solid var(--hairline)",
                    }}
                  >
                    <th
                      className="px-3 text-left text-[12px] font-medium"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Stage
                    </th>

                    <th
                      className="px-3 text-left text-[12px] font-medium"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {stages.map((stage) => (
                    <tr
                      key={stage}
                      style={{
                        height: "34px",
                        borderBottom: "1px solid var(--hairline)",
                      }}
                    >
                      <td className="px-3">
                        <span
                          className="font-mono text-[12px]"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {stage}
                        </span>
                      </td>

                      <td className="px-3">
                        <span
                          className="font-mono text-[12px]"
                          style={{ color: "var(--text-muted)" }}
                        >
                          —
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              className="mt-3 text-[12px]"
              style={{ color: "var(--text-muted)" }}
            >
              Detailed stage status is provided by the pipeline detail
              endpoint.
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Pipelines