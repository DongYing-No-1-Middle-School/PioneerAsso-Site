import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section
        className="flex flex-col gap-2 items-center justify-center"
        style={{ height: "calc(100vh - 128px)" }}
      >
        <div className="inline-block max-w-xl">
          <span className={title()}>Association for&nbsp;</span>
          <span className={title({ color: "violet" })}>Pioneers&nbsp;</span>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
      </section>
      <section className="flex flex-col gap-2 justify-center items-center">
        <p>你好，这里是 PioneerAsso 官网！</p>

        <p>目前官网正在施工中，您可以点击下方连接跳转到对应子站：</p>

        <ul className="flex flex-col items-center">
          <li>
            <Link href="https://agphotos.art">光影摄影协会</Link>
          </li>
          <li>
            <Link href="https://beichen.pioneerasso.tech">
              北辰广播站点歌系统
            </Link>
          </li>
          <li>
            <Link href="https://current.pioneerasso.tech">
              羽翼英语社 Current 投稿网站
            </Link>
          </li>
        </ul>

        <p>在下方查看我们的服务状态：</p>

        <Link href="https://status.pioneerasso.tech">Pioneer Status</Link>
      </section>
    </DefaultLayout>
  );
}
