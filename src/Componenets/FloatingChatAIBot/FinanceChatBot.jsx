"use client";
import { useEffect, useRef, useState } from "react";
import { Paper, IconButton, Avatar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import API from "@/service/api";
import { useRouter } from "next/navigation";

export default function FinanceChatBot() {
  const [open, setOpen] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, questions]);

  const fetchQuestions = async () => {
    const res = await API.get("/chatbot/questions?lang=mr");
    setQuestions(res.data.data);
  };

  useEffect(() => {
    if (open) fetchQuestions();
  }, [open]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: input },
      {
        role: "bot",
        text: "📞 आमच्याशी संपर्क साधा. अधिक माहितीसाठी Contact Us पेजला भेट द्या.",
        link: "/contact",
      },
    ]);
    setOpen(false);
    setMessages([]);
    setInput("");
  };

  const handleClose = () => {
    setOpen(false);
    setMessages([]);
    setInput("");
  };
  return (
    <>
      {/* Floating Button */}
      <div
        onClick={() => setOpen(true)}
        className="
    fixed bottom-6 right-6 z-50
    w-14 h-14
    rounded-full
    cursor-pointer
    flex items-center justify-center
    bg-gradient-to-br from-[#1C76A9] to-[#00C897]
    text-white
    shadow-xl

    transition-all duration-300 ease-out
    hover:scale-110 hover:shadow-2xl
    active:scale-95

    animate-[pulse_2.5s_infinite]
  "
      >
        <span
          className="
      absolute inset-0
      rounded-full
      border-2 border-white/30
      animate-ping
    "
        />

        {/* Chat Icon */}
        <span className="relative text-xl animate-bounce">💬</span>
      </div>

      {open && (
        <Paper
          elevation={10}
          className="fixed bottom-24 p-3  right-6 w-90 h-[400px] rounded-2xl z-50 flex flex-col overflow-hidden"
        >
          {/* HEADER */}
          <div
            className="h-14  flex items-center gap-3.5  text-white"
            style={{
              background:
                "linear-gradient(90deg, #1C76A9 0%, #004A74 53%, #008BDA 100%)",
            }}
          >
            <Avatar />
            <div className="flex-1">
              <p className="text-sm font-semibold">Ask Your Queries</p>
            </div>
            <IconButton size="small" onClick={handleClose}>
              <CloseIcon className="text-white text-lg" />
            </IconButton>
          </div>

          {/* CHAT BODY */}
          <div className="flex-1 overflow-y-auto px-4 py-3 bg-[#ECE5DD] space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2.5 text-xs rounded-xl max-w-[75%] shadow-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-green-500 text-white rounded-br-none"
                      : "bg-white text-gray-800 rounded-bl-none"
                  }`}
                >
                  {msg.text}

                  {msg.link && (
                    <button
                      onClick={() => router.push(msg.link)}
                      className="block mt-2 text-[11px] text-blue-600 underline"
                    >
                      Contact Us →
                    </button>
                  )}
                </div>
              </div>
            ))}

            {/* QUESTIONS */}
            {questions.length > 0 && (
              <div className="pt-3 space-y-2">
                {questions.map((q) => (
                  <button
                    key={q._id}
                    className="w-full bg-white text-xs text-left px-3 py-2.5 rounded-lg border shadow-sm hover:bg-gray-50"
                    onClick={() =>
                      setMessages((prev) => [
                        ...prev,
                        { role: "user", text: q.questions },
                        { role: "bot", text: q.answer },
                      ])
                    }
                  >
                    👉 {q.questions}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* INPUT BAR */}
          <div className="h-14 bg-white flex items-center px-2 border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message"
              className="flex-1 text-xs px-3 py-2 rounded-full border outline-none"
            />
            <IconButton onClick={handleSend}>
              <SendIcon className="text-blue-400" />
            </IconButton>
          </div>
        </Paper>
      )}
    </>
  );
}
