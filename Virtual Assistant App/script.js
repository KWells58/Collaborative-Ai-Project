import { OpenAI } from "langchain/llms/openai";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage } from "langchain/schema";

const llms = new OpenAI
({
    openAIApiKey: "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"
});

const chatModel = new ChatOpenAI();

const searchBox = document.querySelector(".search input");
const messages = [new HumanMessage({ content: searchBox})];

const response = await llms.predictMessages(messages);

console.log(response);
