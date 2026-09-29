const summary = {
  totalHosts: 3,
  onlineHosts: 2,
  offlineHosts: 1,
  activeJobs: 4,
  completedJobs: 3,
  failedJobs: 1,
  totalEvidence: 22,
  openFindings: 3,
}

const recentJobs = [
  {
    id: "job-002",
    host: "host-001",
    operation: "Full Forensic Sweep",
    status: "RUNNING",
  },
  {
    id: "job-001",
    host: "host-001",
    operation: "Host Collection",
    status: "COMPLETED",
  },
]

const recentFindings = [
  {
    id: "finding-001",
    title: "Suspicious Process Correlation",
    severity: "HIGH",
    host: "host-001",
    status: "OPEN",
  },
]

function Status({ value }) {
  const state =
    value === "COMPLETED"
      ? "var(--state-success)"
      : value === "FAILED"
        ? "var(--state-critical)"
        : value === "RUNNING"
          ? "var(--state-warning)"
          : "var(--text-secondary)"

  return (
    <span className="inline-flex items-center gap-2">
      <span
        aria-hidden="true"
        className="h-[6px] w-[6px] rounded-full"
        style={{ background: state }}
      />
      <span>{value}</span>
    </span>
  )
}

function Dashboard() {
  return (
    <main
      className="min-w-0 flex-1 overflow-auto"
      style={{ background: "var(--page)" }}
    >
      <div className="px-8 py-6">
        {/* Header */}
        <header className="mb-8">
          <h1
            className="text-[20px] font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Dashboard
          </h1>

          <p
            className="mt-1 text-[13px]"
            style={{ color: "var(--text-secondary)" }}
          >
            Operational overview
          </p>
        </header>

        {/* Summary */}
        <section
          className="mb-8 border-y py-4"
          style={{ borderColor: "var(--hairline)" }}
          aria-label="Operational summary"
        >
          <div className="grid grid-cols-4">
            <div className="pr-6">
              <p
                className="text-[12px] font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                Hosts
              </p>

              <p
                className="mono mt-1 text-[28px] font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                {summary.totalHosts}
              </p>

              <p
                className="text-[12px]"
                style={{ color: "var(--text-secondary)" }}
              >
                {summary.onlineHosts} online · {summary.offlineHosts} offline
              </p>
            </div>

            <div
              className="border-l px-6"
              style={{ borderColor: "var(--hairline)" }}
            >
              <p
                className="text-[12px] font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                Active jobs
              </p>

              <p
                className="mono mt-1 text-[28px] font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                {summary.activeJobs}
              </p>

              <p
                className="text-[12px]"
                style={{ color: "var(--text-secondary)" }}
              >
                {summary.completedJobs} completed · {summary.failedJobs} failed
              </p>
            </div>

            <div
              className="border-l px-6"
              style={{ borderColor: "var(--hairline)" }}
            >
              <p
                className="text-[12px] font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                Evidence
              </p>

              <p
                className="mono mt-1 text-[28px] font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                {summary.totalEvidence}
              </p>

              <p
                className="text-[12px]"
                style={{ color: "var(--text-secondary)" }}
              >
                collected items
              </p>
            </div>

            <div
              className="border-l px-6"
              style={{ borderColor: "var(--hairline)" }}
            >
              <p
                className="text-[12px] font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                Open findings
              </p>

              <p
                className="mono mt-1 text-[28px] font-semibold"
                style={{
                  color:
                    summary.openFindings > 0
                      ? "var(--state-critical)"
                      : "var(--text-primary)",
                }}
              >
                {summary.openFindings}
              </p>

              <p
                className="text-[12px]"
                style={{ color: "var(--text-secondary)" }}
              >
                requiring review
              </p>
            </div>
          </div>
        </section>

        {/* Recent Jobs */}
        <section className="mb-8">
          <h2
            className="mb-3 text-[13px] font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Recent job activity
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr
                  className="h-[34px] text-left"
                  style={{
                    background: "var(--surface)",
                    borderBottom: "1px solid var(--hairline)",
                  }}
                >
                  <th
                    className="px-3 text-[12px] font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Job
                  </th>
                  <th
                    className="px-3 text-[12px] font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Host
                  </th>
                  <th
                    className="px-3 text-[12px] font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Operation
                  </th>
                  <th
                    className="px-3 text-[12px] font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {recentJobs.map((job) => (
                  <tr
                    key={job.id}
                    className="h-[34px]"
                    style={{
                      borderBottom: "1px solid var(--hairline)",
                    }}
                  >
                    <td
                      className="mono px-3 text-[13px]"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {job.id}
                    </td>

                    <td
                      className="mono px-3 text-[13px]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {job.host}
                    </td>

                    <td
                      className="px-3 text-[13px]"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {job.operation}
                    </td>

                    <td
                      className="px-3 text-[13px]"
                      style={{ color: "var(--text-primary)" }}
                    >
                      <Status value={job.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Recent Findings */}
        <section>
          <h2
            className="mb-3 text-[13px] font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Recent correlation findings
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr
                  className="h-[34px] text-left"
                  style={{
                    background: "var(--surface)",
                    borderBottom: "1px solid var(--hairline)",
                  }}
                >
                  <th
                    className="px-3 text-[12px] font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Finding
                  </th>
                  <th
                    className="px-3 text-[12px] font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Severity
                  </th>
                  <th
                    className="px-3 text-[12px] font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Host
                  </th>
                  <th
                    className="px-3 text-[12px] font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {recentFindings.map((finding) => (
                  <tr
                    key={finding.id}
                    className="h-[34px]"
                    style={{
                      borderBottom: "1px solid var(--hairline)",
                    }}
                  >
                    <td
                      className="px-3 text-[13px]"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {finding.title}
                    </td>

                    <td
                      className="px-3 text-[13px]"
                      style={{ color: "var(--state-critical)" }}
                    >
                      {finding.severity}
                    </td>

                    <td
                      className="mono px-3 text-[13px]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {finding.host}
                    </td>

                    <td
                      className="px-3 text-[13px]"
                      style={{ color: "var(--text-primary)" }}
                    >
                      <Status value={finding.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Dashboard