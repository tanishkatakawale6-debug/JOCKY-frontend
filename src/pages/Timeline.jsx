import { useMemo, useState } from "react"

const timelineEvents = [
  {
    id: "event-001",
    host_id: "host-001",
    type: "PROCESS_START",
    severity: "INFO",
  },
  {
    id: "event-002",
    host_id: "host-001",
    type: "NETWORK_CONNECTION",
    severity: "HIGH",
  },
  {
    id: "event-003",
    host_id: "host-001",
    type: "PROCESS_TERMINATE",
    severity: "INFO",
  },
  {
    id: "event-004",
    host_id: "host-001",
    type: "FILE_CREATE",
    severity: "LOW",
  },
  {
    id: "event-005",
    host_id: "host-001",
    type: "NETWORK_CONNECTION",
    severity: "MEDIUM",
  },
  {
    id: "event-006",
    host_id: "host-002",
    type: "PROCESS_START",
    severity: "INFO",
  },
  {
    id: "event-007",
    host_id: "host-002",
    type: "PROCESS_START",
    severity: "INFO",
  },
  {
    id: "event-008",
    host_id: "host-002",
    type: "NETWORK_BIND",
    severity: "LOW",
  },
  {
    id: "event-009",
    host_id: "host-002",
    type: "FILE_MODIFY",
    severity: "LOW",
  },
  {
    id: "event-010",
    host_id: "host-001",
    type: "FILE_DELETE",
    severity: "MEDIUM",
  },
  {
    id: "event-011",
    host_id: "host-001",
    type: "PROCESS_START",
    severity: "CRITICAL",
  },
  {
    id: "event-012",
    host_id: "host-002",
    type: "NETWORK_CONNECTION",
    severity: "INFO",
  },
]

const severityOptions = [
  "ALL",
  "CRITICAL",
  "HIGH",
  "MEDIUM",
  "LOW",
  "INFO",
]

function Severity({ value }) {
  const stateColor =
    value === "CRITICAL" || value === "HIGH"
      ? "var(--state-critical)"
      : value === "MEDIUM"
        ? "var(--state-warning)"
        : value === "INFO"
          ? "var(--text-secondary)"
          : "var(--state-success)"

  return (
    <span className="inline-flex items-center gap-2">
      <span
        aria-hidden="true"
        className="h-[6px] w-[6px] shrink-0 rounded-full"
        style={{ background: stateColor }}
      />
      <span style={{ color: "var(--text-primary)" }}>{value}</span>
    </span>
  )
}

function Timeline() {
  const [severityFilter, setSeverityFilter] = useState("ALL")

  const filteredEvents = useMemo(() => {
    if (severityFilter === "ALL") {
      return timelineEvents
    }

    return timelineEvents.filter(
      (event) => event.severity === severityFilter,
    )
  }, [severityFilter])

  const criticalCount = timelineEvents.filter(
    (event) => event.severity === "CRITICAL",
  ).length

  const highCount = timelineEvents.filter(
    (event) => event.severity === "HIGH",
  ).length

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
            Timeline
          </h1>

          <p
            className="mt-1 text-[13px]"
            style={{ color: "var(--text-secondary)" }}
          >
            Chronological inspection of normalized forensic events
          </p>
        </header>

        {/* Summary */}
        <section
          className="mb-8 border-y py-4"
          style={{ borderColor: "var(--hairline)" }}
        >
          <div className="grid grid-cols-4">

            <div className="pr-6">
              <p
                className="text-[12px] font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                Total events
              </p>

              <p
                className="mono mt-1 text-[28px] font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                {timelineEvents.length}
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
                Critical
              </p>

              <p
                className="mono mt-1 text-[28px] font-semibold"
                style={{ color: "var(--state-critical)" }}
              >
                {criticalCount}
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
                High
              </p>

              <p
                className="mono mt-1 text-[28px] font-semibold"
                style={{ color: "var(--state-critical)" }}
              >
                {highCount}
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
                Hosts represented
              </p>

              <p
                className="mono mt-1 text-[28px] font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                2
              </p>
            </div>

          </div>
        </section>

        {/* Timeline */}
        <section>

          <div className="mb-4 flex items-end justify-between">
            <div>
              <h2
                className="text-[13px] font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Event timeline
              </h2>

              <p
                className="mt-1 text-[12px]"
                style={{ color: "var(--text-muted)" }}
              >
                Chronological forensic events
              </p>
            </div>

            {/* Severity filter */}
            <div
              className="flex items-center gap-1"
              role="group"
              aria-label="Timeline severity filter"
            >
              {severityOptions.map((severity) => {
                const active = severityFilter === severity

                return (
                  <button
                    key={severity}
                    type="button"
                    onClick={() => setSeverityFilter(severity)}
                    className="px-2 py-1 text-[12px]"
                    style={{
                      color: active
                        ? "var(--text-primary)"
                        : "var(--text-secondary)",
                      background: active
                        ? "var(--surface)"
                        : "transparent",
                      border: active
                        ? "1px solid var(--hairline)"
                        : "1px solid transparent",
                      borderRadius: "var(--radius-control)",
                      cursor: "pointer",
                    }}
                  >
                    {severity}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Table */}
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
                    Event
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
                    Event type
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
                    Related evidence
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredEvents.map((event) => (
                  <tr
                    key={event.id}
                    className="h-[42px]"
                    style={{
                      borderBottom: "1px solid var(--hairline)",
                    }}
                  >
                    <td
                      className="mono px-3 text-[13px]"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {event.id}
                    </td>

                    <td
                      className="mono px-3 text-[13px]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {event.host_id}
                    </td>

                    <td
                      className="px-3 text-[13px]"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {event.type}
                    </td>

                    <td className="px-3 text-[13px]">
                      <Severity value={event.severity} />
                    </td>

                    <td
                      className="px-3 text-[13px]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      —
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          {filteredEvents.length === 0 && (
            <div
              className="py-8 text-center text-[13px]"
              style={{ color: "var(--text-muted)" }}
            >
              No timeline events match this filter.
            </div>
          )}

        </section>
      </div>
    </main>
  )
}

export default Timeline