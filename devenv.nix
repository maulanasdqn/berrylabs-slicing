{ pkgs, ... }:

{
  packages = with pkgs; [
    bun
    nodejs

    (writeScriptBin "helpme" ''
      __usage="
      👋 Welcome to Berry Labs Development Environment. 🚀
      If you see this message, it means your are inside the Nix shell ❄️.

      [Info]===============================================================>

      NodeJS Version: v${nodejs.version}
      Bun Version: v${bun.version}
      Typescript Version: v${typescript.version} 

      Command available:
        - start:            start project in production ( need to run build first  ) 🛹
        - build:            build project for production
        - dev:              start development server
        - story-dev:        start storybook in development
        - story-build:      build storybook
        - helpme:           show this messages

      Repository:
        - https://github.com/maulanasdqn/berrylabs-slicing
      [Info]===============================================================>
      "
      echo "$__usage"
    '')

    (writeScriptBin "dev" ''
      bun dev
    '')

    (writeScriptBin "build" ''
      bun run build
    '')

    (writeScriptBin "start" ''
      node .next/standalone/server.js
    '')

    (writeScriptBin "story-dev" ''
      bun story:dev
    '')

    (writeScriptBin "story-build" ''
      bun story:build
    '')

  ];

  enterShell = ''
    helpme
  '';

  languages = {
    typescript.enable = true;
    nix.enable = true;
  };

  dotenv.enable = true;

}
