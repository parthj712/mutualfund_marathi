"use client";
import { useEffect, useRef, useState } from "react";
import { Paper, IconButton, Avatar, Box, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import API from "@/service/api";
import { useRouter } from "next/navigation";
import FloatingChatButton from "./FloatingChatButton/FloatingChatButton";
import { TbMessageChatbot } from "react-icons/tb";
import { IoSend } from "react-icons/io5";
import { motion } from "framer-motion";

export default function FinanceChatBot() {
  const [open, setOpen] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [relatedQuestions, setRelatedQuestions] = useState([]);
  const [activeTopic, setActiveTopic] = useState(null);
  const messagesEndRef = useRef(null);
  const router = useRouter();
  const greetingMessage = {
    role: "bot",
    text: "👋 नमस्कार! मी तुमची मदत करण्यासाठी इथे आहे. खालील विषयांपैकी एखादा निवडा 🙂",
  };
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, questions]);

  const fetchQuestions = async () => {
    const res = await API.get("/chatbot/questions?lang=mr&firstOnly=true");
    setQuestions(res.data.data);
  };
  const fetchRelatedQuestions = async (topic, excludeId) => {
    const res = await API.get(
      `/chatbot/questions?lang=mr&topic=${topic}&exclude=${excludeId}`
    );
    setRelatedQuestions(res.data.data);
  };

  useEffect(() => {
    if (open) {
      setMessages([
        greetingMessage, // 👋 greeting first
      ]);

      fetchQuestions();
    }
  }, [open]);

  const handleQuestionClick = async (q) => {
    setMessages((prev) => [
      ...prev,
      { role: "user", text: q.questions },
      { role: "bot", text: q.answer },
    ]);

    setRelatedQuestions((prev) => prev.filter((item) => item._id !== q._id));

    if (q.topic && questions.length > 0) {
      fetchRelatedQuestions(q.topic, q._id);
      setQuestions([]);
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: input },
      {
        role: "bot",
        text: "📞 आमच्याशी थेट संपर्क साधा:",
        phone: "+919876543210",
        email: "support@yourcompany.com",
        link: "/contact",
      },
    ]);

    setInput("");
    setQuestions([]);
  };

  const handleClose = () => {
    setOpen(false);
    setMessages([]);
    setQuestions([]);
    setRelatedQuestions([]);
    setActiveTopic(null);
    setInput("");
  };
  return (
    <>
      {/* Floating Button */}

      <FloatingChatButton setOpen={setOpen} />

      {open && (
        <Paper
          elevation={10}
          sx={{ borderRadius: 7, my: 2 }}
          className="fixed bottom-24 p-3  right-6 w-95 h-[400px] rounded-2xl z-50 flex flex-col overflow-hidden"
        >
          {/* HEADER */}
          <motion.div
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{
              duration: 6,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{
              background: "linear-gradient(90deg, #1C76A9, #004A74, #008BDA)",
              backgroundSize: "300% 300%",
            }}
          >
            <Box
              p={2}
              gap={2}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              color="white"
            >
              <TbMessageChatbot size={28} />

              <div className="flex-1">
                <p className="text-sm font-semibold">Ask Your Queries</p>
              </div>

              <IconButton size="small" onClick={handleClose}>
                <CloseIcon className="text-white text-lg" />
              </IconButton>
            </Box>
          </motion.div>

          {/* CHAT BODY */}
          <div className="flex-1 overflow-y-auto px-4 py-3 bg-[#ECE5DD] space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <Box
                  p={1.5}
                  m={1.5}
                  fontWeight={600}
                  className={` px-4 py-2.5 text-xs rounded-xl max-w-[75%] shadow-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-green-500 text-white rounded-br-none"
                      : "bg-white text-gray-800 rounded-bl-none"
                  }`}
                >
                  <p>{msg.text}</p>

                  {msg.phone && (
                    <a
                      href={`tel:${msg.phone}`}
                      className="block mt-1 text-[11px] text-green-600 underline"
                    >
                      📞 {msg.phone}
                    </a>
                  )}

                  {msg.email && (
                    <a
                      href={`mailto:${msg.email}`}
                      className="block mt-1 text-[11px] text-blue-600 underline"
                    >
                      📧 {msg.email}
                    </a>
                  )}

                  {msg.link && (
                    <button
                      onClick={() => router.push(msg.link)}
                      className="block mt-2 text-[11px] text-purple-600 underline"
                    >
                      Contact Us →
                    </button>
                  )}
                </Box>
              </div>
            ))}

            {relatedQuestions.length > 0 && (
              <Box className="mt-3 space-y-2">
                {relatedQuestions.map((rq) => (
                  <Button
                    key={rq._id}
                    variant="text"
                    className="w-full bg-white text-xs text-left px-3 py-2 rounded-lg border shadow-sm hover:bg-gray-50"
                    onClick={() => handleQuestionClick(rq)}
                  >
                    👉 {rq.questions}
                  </Button>
                ))}
              </Box>
            )}

            {/* QUESTIONS */}
            {questions.length > 0 && (
              <Box>
                {questions.map((q) => (
                  <Button
                    variant="text"
                    color="inherit"
                    sx={{ textAlign: "left", alignItems: "flex-start" }}
                    key={q._id}
                    className="w-full bg-white text-xs text-left px-3 py-2.5 rounded-lg border shadow-sm hover:bg-gray-50"
                    onClick={() => handleQuestionClick(q)}
                  >
                    👉 {q.questions}
                  </Button>
                ))}
              </Box>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* INPUT BAR */}
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            px={2.5}
            pt={1.5}
            pb={2}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message"
              className="flex-1 text-xs px-3 py-2 rounded-full border outline-none"
            />
            <IconButton onClick={handleSend}>
              <IoSend className="text-blue-800" />
            </IconButton>
          </Box>
        </Paper>
      )}
    </>
  );
}
