import type { Plugin } from "@elizaos/core";
import {
  type Action,
  type ActionResult,
  type Content,
  type GenerateTextParams,
  type HandlerCallback,
  type IAgentRuntime,
  type Memory,
  ModelType,
  type Provider,
  type ProviderResult,
  Service,
  type State,
  logger,
} from "@elizaos/core";
import { z } from "zod";
import { cautionActions } from "./actions/caution-actions.js";

/**
 * Example HelloWorld action for the Career Realist plugin
 */
const helloWorldAction: Action = {
  name: "HELLO_WORLD_REALIST",
  similes: ["GREET_REALIST", "SAY_HELLO_REALIST"],
  description: "Responds with a realistic, cautionary greeting message",
  validate: async (
    _runtime: IAgentRuntime,
    _message: Memory,
    _state: State,
  ): Promise<boolean> => {
    return true;
  },
  handler: async (
    _runtime: IAgentRuntime,
    message: Memory,
    _state: State,
    _options: any,
    callback: HandlerCallback,
    _responses: Memory[],
  ): Promise<ActionResult> => {
    try {
      logger.info("Handling HELLO_WORLD_REALIST action");

      const responseContent: Content = {
        text: "Hello! I'm Eliza Career Realist. I provide honest, evidence-based warnings about career challenges. While I believe in pursuing your dreams, I also believe in being fully aware of the difficulties involved. What career are you considering?",
        actions: ["HELLO_WORLD_REALIST"],
        source: message.content.source,
      };

      await callback(responseContent);

      return {
        text: "Sent realistic greeting",
        values: {
          success: true,
          greeted: true,
        },
        data: {
          actionName: "HELLO_WORLD_REALIST",
          messageId: message.id,
          timestamp: Date.now(),
        },
        success: true,
      };
    } catch (error) {
      logger.error({ error }, "Error in HELLO_WORLD_REALIST action:");

      return {
        text: "Failed to send greeting",
        values: {
          success: false,
          error: "GREETING_FAILED",
        },
        data: {
          actionName: "HELLO_WORLD_REALIST",
          error: error instanceof Error ? error.message : String(error),
        },
        success: false,
        error: error instanceof Error ? error : new Error(String(error)),
      };
    }
  },
  examples: [
    [
      {
        name: "{{name1}}",
        content: {
          text: "Hello",
        },
      },
      {
        name: "{{name2}}",
        content: {
          text: "Hello! I'm Eliza Career Realist. I provide honest, evidence-based warnings about career challenges...",
          actions: ["HELLO_WORLD_REALIST"],
        },
      },
    ],
  ],
};

/**
 * Example provider for the Career Realist plugin
 */
const realistProvider: Provider = {
  name: "CAREER_REALIST_PROVIDER",
  description: "Provides realistic career information and warnings",

  get: async (
    _runtime: IAgentRuntime,
    _message: Memory,
    _state: State,
  ): Promise<ProviderResult> => {
    return {
      text: "I provide realistic warnings and cautions about career choices to help you make informed decisions.",
      values: {},
      data: {},
    };
  },
};

/**
 * Career Realist Service
 */
export class CareerRealistService extends Service {
  static serviceType = "career-realist";

  capabilityDescription =
    "This service provides realistic warnings and cautions about career choices to help students make informed decisions.";

  constructor(runtime: IAgentRuntime) {
    super(runtime);
  }

  static async start(runtime: IAgentRuntime) {
    logger.info("*** Starting Career Realist service ***");
    const service = new CareerRealistService(runtime);
    return service;
  }

  static async stop(runtime: IAgentRuntime) {
    logger.info("*** Stopping Career Realist service ***");
    const service = runtime.getService(CareerRealistService.serviceType);
    if (!service) {
      throw new Error("Career Realist service not found");
    }
    service.stop();
  }

  async stop() {
    logger.info("*** Stopping Career Realist service instance ***");
  }
}

/**
 * Career Realist Plugin Configuration
 */
const plugin: Plugin = {
  name: "career-realist",
  description:
    "Career Realist plugin providing honest warnings and cautions about career choices",
  priority: -1000,
  config: {
    EXAMPLE_PLUGIN_VARIABLE: process.env.EXAMPLE_PLUGIN_VARIABLE,
  },
  async init(config: Record<string, string>) {
    logger.info("*** Initializing Career Realist plugin ***");
    try {
      // Plugin initialization logic can go here
      logger.info("Career Realist plugin initialized successfully");
    } catch (error) {
      logger.error("Failed to initialize Career Realist plugin:", error);
      throw error;
    }
  },
  models: {
    [ModelType.TEXT_SMALL]: async (
      _runtime,
      { prompt, stopSequences = [] }: GenerateTextParams,
    ) => {
      return "I provide realistic warnings about career choices. Success requires awareness of challenges and proper preparation.";
    },
    [ModelType.TEXT_LARGE]: async (
      _runtime,
      {
        prompt,
        stopSequences = [],
        maxTokens = 8192,
        temperature = 0.7,
        frequencyPenalty = 0.7,
        presencePenalty = 0.7,
      }: GenerateTextParams,
    ) => {
      return "While pursuing your career goals, remember to consider market realities, burnout risks, and required sacrifices. Informed decisions lead to better outcomes.";
    },
  },
  routes: [
    {
      name: "career-cautions",
      path: "/cautions",
      type: "GET",
      handler: async (_req: any, res: any) => {
        res.json({
          message: "Career Realist API - Providing honest career warnings",
          endpoint: "/cautions",
          description:
            "Access realistic warnings and cautions about career choices",
        });
      },
    },
  ],
  events: {
    MESSAGE_RECEIVED: [
      async (params) => {
        logger.info("Career Realist: Message received");
        logger.info({ keys: Object.keys(params) }, "Message keys");
      },
    ],
    VOICE_MESSAGE_RECEIVED: [
      async (params) => {
        logger.info("Career Realist: Voice message received");
        logger.info({ keys: Object.keys(params) }, "Voice message keys");
      },
    ],
    WORLD_CONNECTED: [
      async (params) => {
        logger.info("Career Realist: World connected");
        logger.info({ keys: Object.keys(params) }, "World connection keys");
      },
    ],
    WORLD_JOINED: [
      async (params) => {
        logger.info("Career Realist: World joined");
        logger.info({ keys: Object.keys(params) }, "World join keys");
      },
    ],
  },
  services: [CareerRealistService],
  actions: [...cautionActions, helloWorldAction], // Include both caution actions and basic greeting
  providers: [realistProvider],
};

export default plugin;
