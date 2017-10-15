import { Compiler, Plugin } from 'webpack'

/**
 * Conditionally includes Webpack plugins.
 */
class IfPlugin implements Plugin {

  /**
   * @param condition
   *        The condition to be checked.
   * 
   * @param truePlugin
   *        The plugin to use when the condition is met.
   * 
   * @param falsePlugin
   *        The plugin to use when the condition is not met.
   *        Defaults to a plugin that simply does nothing.
   * 
   * @return `truePlugin` if the condition is met, or else `falsePlugin`.
   */
  public constructor(
    private readonly condition: boolean,
    private readonly truePlugin: Plugin,
    private readonly falsePlugin?: Plugin,
  ) {

  }

  apply(compiler: Compiler) {
    if (this.condition) {
      this.truePlugin.apply(compiler)
    } else if (this.falsePlugin) {
      this.falsePlugin.apply(compiler)
    }
  }
}

export = IfPlugin
