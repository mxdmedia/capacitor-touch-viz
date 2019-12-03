declare module "@capacitor/core" {
  interface PluginRegistry {
    TouchViz: TouchVizPlugin;
  }
}

export interface TouchVizPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
