import { IconSemiLogo } from '@douyinfe/semi-icons'
import { NavItemProps } from '@douyinfe/semi-ui/lib/es/navigation'
import { Layout, Nav } from '@yc-tech/react-component'
import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useRouteConfig } from '~/hooks/useRouteMeta'
import { getMenuList } from '~/router'

export function AdminLayout() {
  const { Header, Footer, Sider, Content } = Layout
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const { route } = useRouteConfig()

  useEffect(() => {
    if (route) setSelectedKeys([route.key as string])
  }, [route])
  return (
    <Layout style={{ border: '1px solid var(--semi-color-border)' }} className="h-full">
      <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
        <Nav
          selectedKeys={selectedKeys}
          style={{ maxWidth: 220, height: '100%' }}
          renderWrapper={({ itemElement, isSubNav, isInSubNav, props }) => {
            return (
              <Link style={{ textDecoration: 'none' }} to={(props as NavItemProps).link!}>
                {itemElement}
              </Link>
            )
          }}
          items={getMenuList()}
          header={{
            logo: <IconSemiLogo style={{ fontSize: 36 }} />,
            text: 'Semi Design'
          }}
          footer={{
            collapseButton: true
          }}
        />
      </Sider>
      <Layout>
        {/* <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
          <Nav
            mode="horizontal"
            footer={
              <>
                <Button
                  theme="borderless"
                  icon={<IconBell size="large" />}
                  style={{
                    color: 'var(--semi-color-text-2)',
                    marginRight: '12px'
                  }}
                />
                <Button
                  theme="borderless"
                  icon={<IconHelpCircle size="large" />}
                  style={{
                    color: 'var(--semi-color-text-2)',
                    marginRight: '12px'
                  }}
                />
                <Avatar color="orange" size="small">
                  YJ
                </Avatar>
              </>
            }></Nav>
        </Header> */}
        <Content
          style={{
            backgroundColor: 'var(--semi-color-bg-0)'
          }}
          className="overflow-hidden flex flex-col flex-1 px-4 pt-4">
          {/* <Breadcrumb
            style={{
              marginBottom: '24px'
            }}
            routes={['首页', '当这个页面标题很长时需要省略', '上一页', '详情页']}
          /> */}
          <div className="flex-1 overflow-auto w-full">
            <Outlet />
          </div>
        </Content>
        {/* <Footer
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
            color: 'var(--semi-color-text-2)',
            backgroundColor: 'rgba(var(--semi-grey-0), 1)'
          }}>
          <span
            style={{
              display: 'flex',
              alignItems: 'center'
            }}>
            <IconBytedanceLogo size="large" style={{ marginRight: '8px' }} />
            <span>Copyright © 2019 ByteDance. All Rights Reserved. </span>
          </span>
          <span>
            <span style={{ marginRight: '24px' }}>平台客服</span>
            <span>反馈建议</span>
          </span>
        </Footer> */}
      </Layout>
    </Layout>
  )
}
