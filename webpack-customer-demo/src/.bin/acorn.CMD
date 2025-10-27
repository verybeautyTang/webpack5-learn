@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=E:\learn-ai\webpack5-learn\webpack-customer-demo\node_modules\.pnpm\acorn@8.15.0\node_modules\acorn\bin\node_modules;E:\learn-ai\webpack5-learn\webpack-customer-demo\node_modules\.pnpm\acorn@8.15.0\node_modules\acorn\node_modules;E:\learn-ai\webpack5-learn\webpack-customer-demo\node_modules\.pnpm\acorn@8.15.0\node_modules;E:\learn-ai\webpack5-learn\webpack-customer-demo\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=E:\learn-ai\webpack5-learn\webpack-customer-demo\node_modules\.pnpm\acorn@8.15.0\node_modules\acorn\bin\node_modules;E:\learn-ai\webpack5-learn\webpack-customer-demo\node_modules\.pnpm\acorn@8.15.0\node_modules\acorn\node_modules;E:\learn-ai\webpack5-learn\webpack-customer-demo\node_modules\.pnpm\acorn@8.15.0\node_modules;E:\learn-ai\webpack5-learn\webpack-customer-demo\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\.pnpm\acorn@8.15.0\node_modules\acorn\bin\acorn" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\.pnpm\acorn@8.15.0\node_modules\acorn\bin\acorn" %*
)
