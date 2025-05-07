// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { marked } from "marked";
// import { Send, Brain, Loader2 } from "lucide-react";

// const AIModelDemo = () => {
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState<
//     { role: "user" | "ai"; content: string }[]
//   >([
//     {
//       role: "ai",
//       content: "Hello! I'm powered by Gemini AI. How can I help you today?",
//     },
//   ]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSendMessage = async () => {
//     if (!input.trim()) return;

//     // Add user message
//     setMessages((prev) => [...prev, { role: "user", content: input }]);
//     setIsLoading(true);

//     try {
//       // Initialize Gemini API
//       const response = await fetch(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.NEXT_PUBLIC_API_URL}`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             contents: [
//               {
//                 parts: [
//                   {
//                     text: `About us:
// Welcome to JVAI (Joint Venture AI)--- Where we turn innovative ideas into intelligent digital solutions.
// We’re a passionate team that builds custom AI chatbots, smart apps, and websites for people and businesses worldwide. Our goal is simple: to make technology work for you in a way that feels easy, natural, and powerful.
// Whether you need a chatbot that speaks your customers’ language or a beautiful, functional app or website to grow your business, we’re here to help. We don’t just write code. We listen, understand, and create solutions that solve problems.
// At JVAI, we blend innovation with empathy to build technology that truly connects with users.

// Mission:
// To create intelligent, user-friendly AI solutions that solve real-world problems. We’re on a mission to make custom AI chatbots, smart apps, and websites that are not only technically sophisticated but also meaningful to their users. By blending innovation with empathy, we aim to empower businesses worldwide with technology that works, feels natural, and delivers results.
// Vision:
// To become a global leader in human-centred AI innovation.
// In our ideal future, artificial intelligence would improve people's lives, make life easier, and close the gap between humans and technology. Our mission at JVAI is to drive that future by creating dependable, user-friendly, and significant AI-powered digital experiences for people and companies globally.
// Contact us:  mailto:  jvai76951@gmail.com
// Linkedin: Team List
//   1.  Md. Gazi Alauddin
//         GM of JVAI
//   2.   Palash Chandra Barman
//         Sr. Software Engineer
//  3.   Rafsun Ahmed
//        Sr. AI Developer
// 4. Istiaq Ahmmed Fahad
//      Sr. AI Developer
// 5.  MD. Shehabuddin Tushar
//       Head of business development
// 6.  Md Ibrahim Hossen
//      Full stack Developer
// 7.  Nilutpal Majumder
//      UX/UI Designer
// 8.  Md. Shamsuzzaman
//       Software Developer
// `,
//                   },
//                 ],
//               },
//             ],
//           }),
//         }
//       );

//       const data = await response.json();

//       // Check for errors in response
//       if (data.error) {
//         throw new Error(data.error.message);
//       }

//       // Extract the generated text from response
//       const aiResponse =
//         data.candidates?.[0]?.content?.parts?.[0]?.text ||
//         "Sorry, I couldn't generate a response.";
//       // console.log("AI Response:", aiResponse);

//       setMessages((prev) => [...prev, { role: "ai", content: aiResponse }]);
//     } catch (error) {
//       console.error("Gemini API error:", error);
//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "ai",
//           content:
//             "Sorry, there was an error processing your request. Please try again.",
//         },
//       ]);
//     } finally {
//       setIsLoading(false);
//       setInput("");
//     }
//   };

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
//         <h3 className="text-white font-medium">Join Venture AI Assistant </h3>
//       </div>

//       <div className="h-80 overflow-y-auto p-4 flex flex-col gap-4">
//         {messages.map((message, index) => (
//           <motion.div
//             key={index}
//             className={`flex ${
//               message.role === "user" ? "justify-end" : "justify-start"
//             }`}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div
//               className={`max-w-[80%] p-3 rounded-lg ${
//                 message.role === "user"
//                   ? "bg-[#0043f8] text-white"
//                   : "bg-gray-800 text-gray-200"
//               }`}
//               dangerouslySetInnerHTML={{
//                 __html: marked.parse(message.content),
//               }}
//             />
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
//             if (e.key === "Enter") handleSendMessage();
//           }}
//         />
//         <Button
//           onClick={handleSendMessage}
//           className="bg-[#0043f8] hover:bg-[#0036c5]"
//         >
//           <Send className="h-4 w-4" />
//         </Button>
//       </div>
//     </motion.div>
//   );
// };

// export default AIModelDemo;

"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { marked } from "marked";
import { Send, Brain, Loader2 } from "lucide-react";

const AIModelDemo = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "ai"; content: string }[]
  >([
    {
      role: "ai",
      content:
        "Hello! I'm powered by  JVAI Assistant. How can I help you today?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to the conversation
    const userMessage = { role: "user" as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Prepare the conversation history for the API
      const conversationHistory = [
        {
          role: "user",
          parts: [
            {
              text: `
Welcome to JVAI (Joint Venture AI)--- Where we turn innovative ideas into intelligent digital solutions.
We’re a passionate team that builds custom AI chatbots, smart apps, and websites for people and businesses worldwide. Our goal is simple: to make technology work for you in a way that feels easy, natural, and powerful.
Whether you need a chatbot that speaks your customers’ language or a beautiful, functional app or website to grow your business, we’re here to help. We don’t just write code. We listen, understand, and create solutions that solve problems.
At JVAI, we blend innovation with empathy to build technology that truly connects with users.

Mission:
To create intelligent, user-friendly AI solutions that solve real-world problems. We’re on a mission to make custom AI chatbots, smart apps, and websites that are not only technically sophisticated but also meaningful to their users. By blending innovation with empathy, we aim to empower businesses worldwide with technology that works, feels natural, and delivers results.
Vision:
To become a global leader in human-centred AI innovation.
In our ideal future, artificial intelligence would improve people's lives, make life easier, and close the gap between humans and technology. Our mission at JVAI is to drive that future by creating dependable, user-friendly, and significant AI-powered digital experiences for people and companies globally.

tech list: node js , Next js ,react js, django python , FIREBASE , NEST js , express js , mongodb ,prisma , mysql , postgresql ,  typescript , FAST API , socket io ,   javascript , react , html , css , tailwind , bootstrap , figma , figma , github , git , vscode , netlify , vercel, hostinger ,aws,  Docker, 

Contact us: mailto:jvai76951@gmail.com
Linkedin: Team List
1. Md. Gazi Alauddin - GM of JVAI
2. Palash Chandra Barman - Sr. Software Engineer
3. Rafsun Ahmed - Sr. AI Developer
4. Istiaq Ahmmed Fahad - Sr. AI Developer
5. MD. Shehabuddin Tushar - Head of business development
6. Md Ibrahim Hossen - Full stack Developer
7. Nilutpal Majumder - UX/UI Designer
8. Md. Shamsuzzaman - Software Developer
9 Sharif Mahamud - Full stack Developer
10. Md. Shamsuzzaman - Software Developer

You answer will be like a first person like I, me, my, etc. and you are a chatbot of jvai. You are a friendly and helpful chatbot. You are here to assist the user with their queries related to JVAI. You can answer questions about our services, company information, and how we can help businesses with technology solutions.

User question: ${input}`,
            },
          ],
        },
      ];

      // Make API request to Gemini
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.NEXT_PUBLIC_API_URL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: conversationHistory,
          }),
        }
      );

      const data = await response.json();

      // Check for errors in response
      if (data.error) {
        throw new Error(data.error.message);
      }

      // Extract the generated text from response
      const aiResponse =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't generate a response.";

      // Add AI response to messages
      setMessages((prev) => [...prev, { role: "ai", content: aiResponse }]);
    } catch (error) {
      console.error("Gemini API error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content:
            "Sorry, there was an error processing your request. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
      scrollToBottom();
    }
  };

  // Scroll to bottom when new messages are added
  // useEffect(() => {
  //   scrollToBottom();
  // }, [messages]);

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
        <h3 className="text-white font-medium">Joint Venture AI Assistant</h3>
      </div>

      <div className="h-80 overflow-y-auto p-4 flex flex-col gap-4">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.role === "user"
                  ? "bg-[#0043f8] text-white"
                  : "bg-gray-800 text-gray-200"
              }`}
              dangerouslySetInnerHTML={{
                __html: marked.parse(message.content, { breaks: true }),
              }}
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
        {/* <div ref={messagesEndRef} /> */}
      </div>

      <div className="p-4 border-t border-gray-800 flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about our AI solutions..."
          className="bg-gray-800 border-gray-700 text-white"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !isLoading) handleSendMessage();
          }}
          disabled={isLoading}
        />
        <Button
          onClick={handleSendMessage}
          className="bg-[#0043f8] hover:bg-[#0036c5]"
          disabled={isLoading}
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
};

export default AIModelDemo;
