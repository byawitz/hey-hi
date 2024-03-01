#! /usr/bin/env node

import HeyHi from "./index";

class Cli {
  static run() {
    if (process.argv.length === 2) {
      Cli.tryWithConfigFile();
    } else if (process.argv.length > 2) {
      Cli.tryWithArguments();
    }
  }

  static tryWithConfigFile() {
    // ToDo
  }

  static tryWithEnvVariables() {
    // ToDo
  }

  static async tryWithArguments() {
    try {
      const args = process.argv.slice(2);
      const provider = args[0] ?? "";
      const env = (args[1] ?? "").split("||");
      const icon = args[2] ?? "";
      const title = args[3] ?? "";
      const content = args[4] ?? "";

      await this.send(provider, env, icon, title, content);

      // ToDo change to chalk
      console.log(`Message sent using ${provider}`);
    } catch (e) {
      // ToDo: Log error
    }
  }

  public static async send(provider: string, env: string[], icon: string, title: string, content: string) {
    HeyHi.iterator().forEach((i) => {
      if (i.name.toLowerCase() === provider.toLowerCase()) {
        HeyHi.addProvider(new i.construct(env[0] ?? "", env[1] ?? "", env[2] ?? "", env[3] ?? "", env[4] ?? ""));
      }
    });

    await HeyHi.sendNotification({ icon, title, content });
  }
}

Cli.run();
