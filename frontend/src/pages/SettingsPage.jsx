import { THEMS } from "../constants/index.js";
import { useThemeStore } from "../store/useThemeStore.js";
import { Send } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  {
    id: 2,
    content: "I'm doing great! Just working on some new features.",
    isSent: true,
  },
];

function SettingsPage() {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="min-h-screen px-4 pt-20 pb-10 container mx-auto max-w-5xl">
      <div className="space-y-6">
        {/* Theme Section */}
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">Theme</h2>
          <p className="text-sm text-base-content/70">
            Choose a theme for your chat interface
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
          {THEMS.map((t) => (
            <button
              key={t}
              className={`group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors
              ${theme === t ? "bg-base-200" : "hover:bg-base-200/50"}`}
              onClick={() => setTheme(t)}
            >
              <div
                className="relative h-8 w-full rounded-md overflow-hidden"
                data-theme={t}
              >
                <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                  <div className="rounded bg-primary"></div>
                  <div className="rounded bg-secondary"></div>
                  <div className="rounded bg-accent"></div>
                  <div className="rounded bg-neutral"></div>
                </div>
              </div>
              <span className="text-[11px] font-medium truncate w-full text-center">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </span>
            </button>
          ))}
        </div>

        {/* Preview Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Preview</h3>

          <div className="rounded-xl border border-base-300 bg-base-100 shadow-sm overflow-hidden">
            <div className="bg-base-200 p-4">
              <div className="w-full max-w-md mx-auto">
                {/* Chat Mock UI */}
                <div className="bg-base-100 rounded-xl shadow overflow-hidden">
                  {/* Header */}
                  <div className="px-4 py-3 border-b border-base-300 bg-base-100 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content font-medium">
                      J
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">Jahidul Hasan Suhel</h3>
                      <p className="text-xs text-base-content/70">Online</p>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="p-4 space-y-4 min-h-[160px] max-h-[200px] overflow-y-auto bg-base-100">
                    {PREVIEW_MESSAGES.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${
                          message.isSent ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[80%] rounded-xl p-3 shadow-sm text-sm ${
                            message.isSent
                              ? "bg-primary text-primary-content"
                              : "bg-base-200"
                          }`}
                        >
                          <p>{message.content}</p>
                          <p
                            className={`text-[10px] mt-1.5 ${
                              message.isSent
                                ? "text-primary-content/70"
                                : "text-base-content/70"
                            }`}
                          >
                            12:00 PM
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Input */}
                  <div className="p-4 border-t border-base-300 flex gap-2 items-center bg-base-100">
                    <input
                      type="text"
                      className="input input-bordered flex-1 text-sm h-10"
                      placeholder="Type a message..."
                      value="This is a preview"
                      readOnly
                    />
                    <button className="btn btn-primary h-10 min-h-0">
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> {/* end preview */}
      </div>
    </div>
  );
}

export default SettingsPage;
