// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Send, Brain, Loader2 } from "lucide-react"

// const AIModelDemo = () => {
//   const [input, setInput] = useState("")
//   const [messages, setMessages] = useState<{ role: "user" | "ai"; content: string }[]>([
//     { role: "ai", content: "Hello! I'm the Join Venture AI assistant. How can I help you today?" },
//   ])
//   const [isLoading, setIsLoading] = useState(false)

//   const handleSendMessage = () => {
//     if (!input.trim()) return

//     // Add user message
//     setMessages((prev) => [...prev, { role: "user", content: input }])
//     setIsLoading(true)

//     // Simulate AI response
//     setTimeout(() => {
//       const responses = [
//         "I can help you implement that AI solution for your business. Would you like to schedule a demo?",
//         "That's an interesting challenge. Our predictive analytics could provide valuable insights for your situation.",
//         "Based on your needs, I'd recommend our custom AI development services. Would you like to learn more?",
//         "Our team has extensive experience solving similar problems. Let me show you how we approach this.",
//       ]

//       const randomResponse = responses[Math.floor(Math.random() * responses.length)]
//       setMessages((prev) => [...prev, { role: "ai", content: randomResponse }])
//       setIsLoading(false)
//     }, 1500)

//     setInput("")
//   }

//   return (
//     <motion.div
//       className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//     >
//       <div className="p-4 bg-gray-800 flex items-center">
//         <Brain className="h-6 w-6 text-[#0043f8] mr-2" />
//         <h3 className="text-white font-medium">AI Assistant Demo</h3>
//       </div>

//       <div className="h-80 overflow-y-auto p-4 flex flex-col gap-4">
//         {messages.map((message, index) => (
//           <motion.div
//             key={index}
//             className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div
//               className={`max-w-[80%] p-3 rounded-lg ${
//                 message.role === "user" ? "bg-[#0043f8] text-white" : "bg-gray-800 text-gray-200"
//               }`}
//             >
//               {message.content}
//             </div>
//           </motion.div>
//         ))}

//         {isLoading && (
//           <div className="flex justify-start">
//             <div className="bg-gray-800 p-3 rounded-lg text-gray-200 flex items-center">
//               <Loader2 className="h-4 w-4 mr-2 animate-spin" />
//               AI is typing...
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="p-4 border-t border-gray-800 flex gap-2">
//         <Input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask about our AI solutions..."
//           className="bg-gray-800 border-gray-700 text-white"
//           onKeyDown={(e) => {
//             if (e.key === "Enter") handleSendMessage()
//           }}
//         />
//         <Button onClick={handleSendMessage} className="bg-[#0043f8] hover:bg-[#0036c5]">
//           <Send className="h-4 w-4" />
//         </Button>
//       </div>
//     </motion.div>
//   )
// }

// export default AIModelDemo

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { marked } from "marked";
import { Send, Brain, Loader2 } from "lucide-react";

const AIModelDemo = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "ai"; content: string }[]>([
    { role: "ai", content: "Hello! I'm powered by Gemini AI. How can I help you today?" },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setIsLoading(true);

    try {
      // Initialize Gemini API
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.NEXT_PUBLIC_API_URL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: input,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      
      // Check for errors in response
      if (data.error) {
        throw new Error(data.error.message);
      }

      // Extract the generated text from response
      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";
      // console.log("AI Response:", aiResponse);
      
      setMessages((prev) => [...prev, { role: "ai", content: aiResponse }]);
    } catch (error) {
      console.error("Gemini API error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "Sorry, there was an error processing your request. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
      setInput("");
    }
  };

  return (
    <motion.div
      className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="p-4 bg-gray-800 flex items-center">
        <Brain className="h-6 w-6 text-[#0043f8] mr-2" />
        <h3 className="text-white font-medium">Gemini AI Assistant Demo</h3>
      </div>

      <div className="h-80 overflow-y-auto p-4 flex flex-col gap-4">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.role === "user" ? "bg-[#0043f8] text-white" : "bg-gray-800 text-gray-200"
              }`}
              dangerouslySetInnerHTML={{ __html: marked.parse(message.content) }}
            />
          </motion.div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-800 p-3 rounded-lg text-gray-200 flex items-center">
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              AI is typing...
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-gray-800 flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about our AI solutions..."
          className="bg-gray-800 border-gray-700 text-white"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
        />
        <Button onClick={handleSendMessage} className="bg-[#0043f8] hover:bg-[#0036c5]">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
};

export default AIModelDemo;