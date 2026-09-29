import { NavLink } from "react-router-dom"

const groups = [
  {
    label: "Operations",
    items: [
      { name: "Dashboard", path: "/" },
      { name: "Hosts", path: "/hosts" },
      { name: "Jobs", path: "/jobs" },
      { name: "Evidence", path: "/evidence" },
      { name: "Timeline", path: "/timeline" },
      { name: "Findings", path: "/findings" },
    ],
  },
  {
    label: "Build",
    items: [
      { name: "Compiler", path: "/compiler" },
      { name: "Pipelines", path: "/pipelines" },
      { name: "Artifacts", path: "/artifacts" },
    ],
  },
  {
    label: "Research",
    items: [
      { name: "Research & Simulation", path: "/research" },
    ],
  },
]

function Sidebar() {
  return (
    <aside
      className="flex h-screen w-[208px] shrink-0 flex-col"
      style={{
        background: "var(--surface)",
        borderRight: "1px solid var(--hairline)",
      }}
    >
      {/* Product identity */}
      <div
        className="px-4 py-6"
        style={{ borderBottom: "1px solid var(--hairline)" }}
      >
        <div
          className="font-mono text-[20px] font-semibold"
          style={{
            color: "var(--text-primary)",
            letterSpacing: "0.04em",
          }}
        >
          JOCKY
        </div>

        <div
          className="mt-1 text-[12px]"
          style={{ color: "var(--text-muted)" }}
        >
          Security operations
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4" aria-label="Main navigation">
        {groups.map((group) => (
          <div key={group.label} className="mb-6">
            <div
              className="mb-2 px-2 text-[12px] font-medium"
              style={{ color: "var(--text-muted)" }}
            >
              {group.label}
            </div>

            <div>
              {group.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className="relative flex h-8 items-center px-2 text-[13px]"
                  style={({ isActive }) => ({
                    color: isActive
                      ? "var(--text-primary)"
                      : "var(--text-secondary)",
                    textDecoration: "none",
                    background: "transparent",
                  })}
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-0 h-8 w-[2px]"
                          style={{ background: "var(--accent)" }}
                        />
                      )}

                      <span>{item.name}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Version */}
      <div
        className="px-4 py-4 font-mono text-[12px]"
        style={{
          color: "var(--text-muted)",
          borderTop: "1px solid var(--hairline)",
        }}
      >
        JOCKY v1
      </div>
    </aside>
  )
}

export default Sidebar