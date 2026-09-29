import { useState } from "react"

const hosts = [
  {
    id: "host-001",
    hostname: "DESKTOP-FORENSICS",
    type: "REAL",
    status: "ONLINE",
  },
  {
    id: "host-002",
    hostname: "UBUNTU-LAB",
    type: "SIMULATED",
    status: "ONLINE",
  },
  {
    id: "host-003",
    hostname: "ARCH-LEGACY",
    type: "SIMULATED",
    status: "OFFLINE",
  },
]

function statusColor(status) {
  if (status === "ONLINE") return "var(--state-success)"
  if (status === "OFFLINE") return "var(--state-critical)"
  if (status === "DEGRADED") return "var(--state-warning)"
  return "var(--text-muted)"
}

function Hosts() {
  const [selectedHost, setSelectedHost] = useState(hosts[0])

  const online = hosts.filter((host) => host.status === "ONLINE").length
  const offline = hosts.filter((host) => host.status === "OFFLINE").length
  const simulated = hosts.filter((host) => host.type === "SIMULATED").length

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
            Hosts
          </h1>

          <p
            className="mt-1 text-[13px]"
            style={{ color: "var(--text-secondary)" }}
          >
            Managed endpoints registered with the platform
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
              Total hosts
            </div>

            <div
              className="mt-1 font-mono text-[28px]"
              style={{ color: "var(--text-primary)" }}
            >
              {hosts.length}
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
              Online
            </div>

            <div
              className="mt-1 font-mono text-[28px]"
              style={{ color: "var(--text-primary)" }}
            >
              {online}
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
              Offline
            </div>

            <div
              className="mt-1 font-mono text-[28px]"
              style={{ color: "var(--text-primary)" }}
            >
              {offline}
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
              Simulated
            </div>

            <div
              className="mt-1 font-mono text-[28px]"
              style={{ color: "var(--text-primary)" }}
            >
              {simulated}
            </div>
          </div>
        </section>

        {/* Host directory */}
        <section className="mb-8">
          <div
            className="mb-3 text-[13px] font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Managed hosts
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
                    Host
                  </th>

                  <th
                    className="px-3 text-left text-[12px] font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Hostname
                  </th>

                  <th
                    className="px-3 text-left text-[12px] font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Type
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
                {hosts.map((host) => {
                  const selected = selectedHost.id === host.id

                  return (
                    <tr
                      key={host.id}
                      onClick={() => setSelectedHost(host)}
                      tabIndex={0}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          setSelectedHost(host)
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
                          {host.id}
                        </span>
                      </td>

                      <td className="px-3">
                        <span
                          className="font-mono text-[12px]"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {host.hostname}
                        </span>
                      </td>

                      <td className="px-3">
                        <span
                          className="font-mono text-[12px]"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {host.type}
                        </span>
                      </td>

                      <td className="px-3">
                        <span className="flex items-center gap-2">
                          <span
                            aria-hidden="true"
                            className="h-[6px] w-[6px] rounded-full"
                            style={{
                              background: statusColor(host.status),
                            }}
                          />

                          <span
                            className="font-mono text-[12px]"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {host.status}
                          </span>
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Host details */}
        <section
          className="mb-8 pt-6"
          style={{ borderTop: "1px solid var(--hairline)" }}
        >
          <div className="mb-4">
            <div
              className="text-[13px] font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Host details
            </div>

            <div
              className="mt-1 font-mono text-[12px]"
              style={{ color: "var(--text-muted)" }}
            >
              {selectedHost.id}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            <div>
              <div
                className="text-[12px]"
                style={{ color: "var(--text-muted)" }}
              >
                Host ID
              </div>

              <div
                className="mt-1 font-mono text-[12px]"
                style={{ color: "var(--text-primary)" }}
              >
                {selectedHost.id}
              </div>
            </div>

            <div>
              <div
                className="text-[12px]"
                style={{ color: "var(--text-muted)" }}
              >
                Hostname
              </div>

              <div
                className="mt-1 font-mono text-[12px]"
                style={{ color: "var(--text-primary)" }}
              >
                {selectedHost.hostname}
              </div>
            </div>

            <div>
              <div
                className="text-[12px]"
                style={{ color: "var(--text-muted)" }}
              >
                Type
              </div>

              <div
                className="mt-1 font-mono text-[12px]"
                style={{ color: "var(--text-primary)" }}
              >
                {selectedHost.type}
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
                    background: statusColor(selectedHost.status),
                  }}
                />

                <span
                  className="font-mono text-[12px]"
                  style={{ color: "var(--text-primary)" }}
                >
                  {selectedHost.status}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* System information */}
        <section
          className="pt-6"
          style={{
            borderTop: "1px solid var(--hairline)",
            borderBottom: "1px solid var(--hairline)",
          }}
        >
          <div className="mb-4">
            <div
              className="text-[13px] font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              System information
            </div>

            <div
              className="mt-1 text-[12px]"
              style={{ color: "var(--text-muted)" }}
            >
              Configuration gathered from the host collection adapter
            </div>
          </div>

          <div
            className="py-6 text-center text-[12px]"
            style={{ color: "var(--text-muted)" }}
          >
            System information is returned by the host system-info endpoint.
          </div>
        </section>
      </div>
    </main>
  )
}

export default Hosts