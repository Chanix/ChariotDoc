---
layout: doc
---
# JSAPI_CORE

内核基本功能

```
    def get_info(self) -> Dict[str, str]:
        return {'chariot_home': os.path.dirname(os.path.realpath(sys.argv[0])),
                'chariot_filename': os.path.basename(sys.argv[0]),
                'chariot_projects_home': os.path.join(os.path.dirname(os.path.realpath(sys.argv[0])), 'projects'),
                }

    # 获取命令行参数
    def get_argv(self) -> List[str]:
        """获取命令行参数"""
        return sys.argv

    def get_uuid(self) -> str:
        """获取 uuid (version 4)"""
        return str(uuid.uuid4())

    def exit(self) -> None:
        """退出应用"""
        for win in webview.windows:
            win.destroy()

    def exec(self, bin_name: str, params: str = '') -> int:
        """运行指定的项目"""
        return subprocess.Popen([bin_name] + shlex.split(params)).pid

    def execwait(self, bin_name: str, params: str = '') -> dict:
        """运行指定的项目"""
        # 等待命令完成（subprocess.run()会阻塞直到命令完成）
        cp: CompletedProcess = subprocess.run([bin_name] + shlex.split(params), capture_output=True, text=True)
        return {'returncode': cp.returncode, 'stdout': cp.stdout, 'stderr': cp.stderr}

    def run(self, project_id: str, prj_params: str = '') -> int:
        """运行指定的项目"""
        cmdline: List[str] = [sys.argv[0]] + [project_id] + shlex.split(prj_params)
        cmdline = cmdline if commonKit.is_compiled() else [sys.executable] + cmdline

        return subprocess.Popen(cmdline).pid

    def runwait(self, project_id: str, prj_params: str = '') -> dict:
        """运行指定的项目"""
        cmdline: List[str] = [sys.argv[0]] + [project_id] + shlex.split(prj_params)
        cmdline = cmdline if commonKit.is_compiled() else [sys.executable] + cmdline

        # 等待命令完成（subprocess.run()会阻塞直到命令完成）
        cp: CompletedProcess = subprocess.run(cmdline, capture_output=True, text=True)
        return {'returncode': cp.returncode, 'stdout': cp.stdout, 'stderr': cp.stderr}
```