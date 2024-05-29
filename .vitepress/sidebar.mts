// import test from "node:test";

export default [
    {
        text: 'PySPT概况',link: '/docs/Signal_Processing/1 PySPT概况.md',
        // items: [
        //   { text: 'PySPT概况', link: '/docs/signal/1 PySPT概况.md' },
        //   { text: 'Runtime API Examples', link: '/api-examples' }
        // ]
      },
      {
        text:'信号生成和预处理',link:'/docs/Signal_Processing/2 信号生成和预处理.md',
          items:[
            {text:'平滑和去噪',link:'/docs/Signal_Processing/2.1 平滑和去噪.md',
              collapsed: true,
              items:[
                {text:'信号平滑处理',link:'/docs/Signal_Processing/2.1.1 信号平滑处理.md'},
                {text:'对数据去趋势',link:'/docs/Signal_Processing/2.1.2 对数据去趋势.md'},
                {text:'从信号中去除60Hz干扰',link:'/docs/Signal_Processing/2.1.3 从信号中去除 60 Hz 干扰.md'},
                {text:'去除信号中的峰值',link:'/docs/Signal_Processing/2.1.4 去除信号中的峰值.md'}
              ]

            },
            {text:'波形生成',link:'/docs/Signal_Processing/2.2 波形生成.md',
              collapsed: true,
              items:[
                // {text:'创建均匀和非均匀时间向量',link:'/docs/Signal_Processing/2.2.1 创建均匀和非均匀时间向量.md'},
                {text:'波形生成：时间向量和正弦波',link:'/docs/Signal_Processing/2.1.2 对数据去趋势.md'},
                {text:'脉冲函数、阶跃函数和斜坡函数',link:'/docs/Signal_Processing/2.2.3 脉冲函数、阶跃函数和斜坡函数.md'},
                {text:'常见的周期性波形',link:'/docs/Signal_Processing/2.2.4 常见的周期性波形.md'},
                {text:'常见的非周期波形',link:'/docs/Signal_Processing/2.2.5 常见的非周期波形.md'},
                {text:'pulstran函数',link:'/docs/Signal_Processing/2.2.6 pulstran函数.md'},
                {text:'sinc',link:'/docs/Signal_Processing/2.2.7 sinc.md'},
                {text:'Dirichlet',link:'/docs/Signal_Processing/2.2.8 Dirichlet.md'}
              ]
            }
              
          ]
      },
      {
        text:'测量和特征提取',link:'/docs/Signal_Processing/3 测量和特征提取.md',
          items:[
            {text:'描述性统计量',link:'/docs/Signal_Processing/3.1 描述性统计量.md',
              collapsed: true,
              items:[
                {text:'确定峰宽',link:'/docs/Signal_Processing/3.1.2 确定峰宽.md'},
                {text:'周期性波形的RMS值',link:'/docs/Signal_Processing/3.1.8 周期性波形的RMS值.md'},
                {text:'在数据中查找峰值',link:'/docs/Signal_Processing/3.1.9 在数据中查找峰值.md'},

              ]

            },
            {text:'脉冲和瞬态指标',link:'/docs/Signal_Processing/3.2 脉冲和瞬态指标.md',
              collapsed: true,
              items:[
                {text:'矩形脉冲波形的占空比',link:'/docs/Signal_Processing/3.2.3 矩形脉冲波形的占空比.md'},
              ]

            },
            {text:'频谱测量',link:'/docs/Signal_Processing/3.3 频谱测量.md'}
              
          ]
      },
      {
        text:'变换、相关性和建模',link:'/docs/Signal_Processing/4 变换、相关性和建模.md',
            items:[
                {text:'变换',link:'/docs/Signal_Processing/4.1 变换.md',
                    collapsed:true,
                    items:[
                        {text:'离散傅里叶变换',link:'/docs/Signal_Processing/4.1.4 离散傅里叶变换.md'},
                        {text:'Z变换',link:'/docs/Signal_Processing/4.1.5 Z变换 .md'},
                        {text:'离散余弦转换',link:'/docs/Signal_Processing/4.1.6 离散余弦变换.md'},
                        {text:'用于语言信号压缩的DCT',link:'/docs/Signal_Processing/4.1.7 用于语音信号压缩的DCT.md'},
                        {text:'Hilbert',link:'/docs/Signal_Processing/4.1.8 Hilbert.md'},
                        {text:'余弦解析信号',link:'/docs/Signal_Processing/4.1.9 余弦解析信号.md'},
                        {text:'Hilbert变换与瞬时频率',link:'/docs/Signal_Processing/4.1.12 Hilbert变换与瞬时频率.md'},
                        {text:'频域线性回归',link:'/docs/Signal_Processing/4.1.16 频域线性回归.md'},
                        {text:'倒频谱分析',link:'/docs/Signal_Processing/4.1.16倒频谱分析.md'}
                    ]
                },
                {text:'相关性和卷积',link:'/docs/Signal_Processing/4.2 相关性和卷积.md',
                    collapsed:true,
                    items:[
                        {text:'残差分析和其自相关',link:'/docs/Signal_Processing/4.2.1 残差分析与其自相关.md'},
                        {text:'将信号与不同开始时间对其',link:'/docs/Signal_Processing/4.2.4 将信号与不同开始时间对齐.md'},
                        {text:'使用互相关对齐信号',link:'/docs/Signal_Processing/4.2.5 使用互相关对齐信号.md'},
                        {text:'使用自相关求周期性',link:'/docs/Signal_Processing/4.2.6 使用自相关求周期性.md'},
                        {text:'回声消除',link:'/docs/Signal_Processing/4.2.7 回声消除.md'},
                        {text:'多通道输入的互相关',link:'/docs/Signal_Processing/4.2.8 多通道输入的互相关.md'},
                        {text:'样本自相关的置信区间',link:'/docs/Signal_Processing/4.2.9 样本自相关的置信区间.md'},
                        {text:'两个指数序列的互相关',link:'/docs/Signal_Processing/4.2.11 两个指数序列的互相关.md'},
                        {text:'移动平均过程的自相关',link:'/docs/Signal_Processing/4.2.12 移动平均过程的自相关.md'},
                        {text:'两个移动平均过程的互相关',link:'/docs/Signal_Processing/4.2.13 两个移动平均过程的互相关.md'},
                        {text:'噪声中延迟信号的互相关',link:'/docs/Signal_Processing/4.2.14 噪声中延迟信号的互相关.md'},
                        {text:'相位滞后正弦波的互相关',link:'/docs/Signal_Processing/4.2.15 相位滞后正弦波的互相关.md'},
                        {text:'线性和循环卷积',link:'/docs/Signal_Processing/4.2.16 线性和循环卷积.md'}
                    ]
                },
                {text:'信号建模',link:'/docs/Signal_Processing/4.3 信号建模.md'}
            ]
      },
      {
        text:'数字和模拟滤波器',link:'/docs/Signal_Processing/5 数字和模拟滤波器.md',
            items:[
                {text:'数字滤波器设计',link:'/docs/Signal_Processing/5.1 数字滤波器设计.md',
                    collapsed:true,
                    items:[
                        {text:'反因果零相位滤波器的实现',link:'/docs/Signal_Processing/5.1.4 反因果零相位滤波器的实现.md'}
                    ]
                },
                {text:'数字滤波器分析',link:'/docs/Signal_Processing/5.2 数字滤波器分析.md',
                    collapsed: true,
                    items:[
                        {text:'扬声器交叉滤波器',link:'/docs/Signal_Processing/5.2.1 扬声器交叉滤波器.md'},
                        {text:'相位响应',link:'/docs/Signal_Processing/5.2.2 相位响应.md'},
                        {text:'零极点分析',link:'/docs/Signal_Processing/5.2.4 零极点分析.md'},
                        {text:'脉冲相应',link:'/docs/Signal_Processing/5.2.5 脉冲响应.md'},
                        
                    ]
                },
                {text:'数字滤波',link:'/docs/Signal_Processing/5.3 数字滤波.md',
                    collapsed: true,
                    items:[
                        {text:'滤波器实现',link:'/docs/Signal_Processing/5.3.1 滤波器实现.md'}
                        
                    ]
                },
                {text:'多采样率信号处理',link:'/docs/Signal_Processing/5.4 多采样率信号处理.md',
                    collapsed: true,
                    items:[
                        {text:'重建缺失的数据',link:'/docs/Signal_Processing/5.4.1 重建缺失的数据.md'},
                        {text:'对非均匀采样信号进行重采样',link:'/docs/Signal_Processing/5.4.3 对非均匀采样信号进行重采样.md'},
                        {text:'下采样-信号相位',link:'/docs/Signal_Processing/5.4.4 下采样-信号相位.md'},
                        {text:'下采样-混叠',link:'/docs/Signal_Processing/5.4.5 下采样-混叠.md'},
                        {text:'在下采样前进行滤波',link:'/docs/Signal_Processing/5.4.6 在下采样前进行滤波.md'},
                        // {text:'更改信号采样率',link:'/docs/Signal_Processing/5.4.7 更改信号采样率.md'},

                    ]
                },
                {text:'模拟滤波器',link:'/docs/Signal_Processing/5.5 模拟滤波器.md',
                    collapsed: true,
                    items:[
                        {text:'模拟IIR低通滤波器的比较',link:'/docs/Signal_Processing/5.5.1 模拟IIR低通滤波器的比较.md'},
                        {text:'低通Bessel滤波器的频率响应',link:'/docs/Signal_Processing/5.5.2 低通Bessel滤波器的频率响应.md'},

                    ]
                }
            ]
      },
      {
        text:'频谱分析',link:'/docs/Signal_Processing/6 频谱分析.md',
              items:[
                {text:'频谱估计',link:'/docs/Signal_Processing/6.1 频谱估计.md',
                  collapsed:true,
                  items:[
                    {text:'使用 FFT 获得功率频谱密度估计',link:'/docs/Signal_Processing/6.1.1 使用 FFT 获得功率频谱密度估计.md'},
                    {text:'频域线性回归',link:'/docs/Signal_Processing/6.1.2 频域线性回归.md'},
                    {text:'检测噪声中的失真信号',link:'/docs/Signal_Processing/6.1.3 检测噪声中的失真信号.md'},
                    {text:'幅值估计和填零-checkpoint',link:'/docs/Signal_Processing/6.1.4 幅值估计和填零-checkpoint.md'},
                    {text:'比较两个信号的频率成分',link:'/docs/Signal_Processing/6.1.5 比较两个信号的频率成分.md'},
                    {text:'在分类时间序列中查找周期性',link:'/docs/Signal_Processing/6.1.7 在分类时间序列中查找周期性.md'},
                    

                  ]

                },
                {text:'参数化频谱估计',link:'/docs/Signal_Processing/6.2 参数化频谱估计.md'},
                {text:'子空间方法',link:'/docs/Signal_Processing/6.3 子空间方法.md',
                  collapsed:true,
                  items:[
                    {text:'频率估计子空间方法',link:'/docs/Signal_Processing/6.3.1 频率估计子空间方法.md'}
                  ]
                },
                {text:'加窗法',link:'/docs/Signal_Processing/6.4 加窗法.md',
                  collapsed: true,
                  items:[
                    {text:'切比雪夫窗',link:'/docs/Signal_Processing/6.4.1 切比雪夫窗.md'}
                  ]
                }
              ]

      }



]