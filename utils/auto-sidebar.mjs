// import path from "node:path";
// import fs from "node:fs";

// // 文件根目录
// const DIR_PATH = path.resolve();
// // 白名单,过滤不是文章的文件和文件夹
// const WHITE_LIST = [
//   "index.md",
//   ".vitepress",
//   "node_modules",
//   ".idea",
//   "assets",
//   "信号平滑处理_files",
//   "对数据去趋势_files",
//   "从信号中去除 60 Hz 干扰_files",
//   "去除信号中的峰值_files",
//   "创建均匀和非均匀时间向量_files",
//   "波形生成：时间向量和正弦波_files",
//   "脉冲函数、阶跃函数和斜坡函数_files",
//   "常见的周期性波形_files",
//   "常见的非周期波形_files",
//   "pulstran函数_files",
//   "Dirichlet_files",
//   "sinc_files",
//   "倒频谱分析",
//   "Hilbert_files",
//   "Hilbert变换与瞬时频率_files",
//   "Z变换 _files",
//   "矩形脉冲波形的占空比_files",
//   "离散傅里叶变换_files",
//   "离散余弦变换_files",
//   "频域线性回归_files",
//   "确定峰宽_files",
//   "用于语音信号压缩的DCT_files",
//   "余弦解析信号_files",
//   "在数据中查找峰值_files",
//   "周期性波形的RMS值_files",
//   "残差分析与其自相关_files",
//   "多通道输入的互相关_files",
//   "回声消除_files",
//   "将信号与不同开始时间对齐_files",
//   "两个移动平均过程的互相关_files",
//   "两个指数序列的互相关_files",
//   "使用互相关对齐信号_files",
//   "使用自相关求周期性_files",
//   "相位滞后正弦波的互相关_files",
//   "样本自相关的置信区间_files",
//   "移动平均过程的自相关_files",
//   "噪声中延迟信号的互相关_files",
//   "反因果零相位滤波器的实现_files",
//   "更改信号采样率_files",
//   "零极点分析_files",
//   "脉冲响应_files",
//   "模拟IIR低通滤波器的比较_files",
//   "下采样-混叠_files",
//   "下采样-信号相位_files",
//   "相位响应_files",
//   "扬声器交叉滤波器_files",
//   "在下采样前进行滤波_files",
//   "重建缺失的数据_files",
//   "比较两个信号的频率成分_files",
//   "幅值估计和填零-checkpoint_files",
//   "检测噪声中的失真信号_files",
//   "频率估计子空间方法_files",
//   "频域线性回归_files",
//   "切比雪夫窗_files",
//   "使用 FFT 获得功率频谱密度估计_files",
//   "在分类时间序列中查找周期性_files"
  
// ];

// // 判断是否是文件夹
// const isDirectory = (path) => fs.lstatSync(path).isDirectory();

// // 取差值
// const intersections = (arr1, arr2) =>
//   Array.from(new Set(arr1.filter((item) => !new Set(arr2).has(item))));

// // 把方法导出直接使用
// function getList(params, path1, pathname) {
//   // 存放结果
//   const res = [];
//   // 开始遍历params
//   for (let file in params) {
//     // 拼接目录
//     const dir = path.join(path1, params[file]);
//     // 判断是否是文件夹
//     const isDir = isDirectory(dir);
//     if (isDir) {
//       // 如果是文件夹,读取之后作为下一次递归参数
//       const files = fs.readdirSync(dir);
//       res.push({
//         text: params[file],
//         collapsible: true,
//         items: getList(files, dir, `${pathname}/${params[file]}`),
//       });
//     } else {
//       // 获取名字
//       const name = path.basename(params[file]);
//       // 排除非 md 文件
//       const suffix = path.extname(params[file]);
//       if (suffix !== ".md") {
//         continue;
//       }
//       res.push({
//         text: name,
//         link: `${pathname}/${name}`,
//       });
//     }
//   }
//   // 对name做一下处理，把后缀删除
//   res.map((item) => {
//     item.text = item.text.replace(/\.md$/, "");
//   });
//   return res;
// }

// export const set_sidebar = (pathname) => {
//   // 获取pathname的路径
//   const dirPath = path.join(DIR_PATH, pathname);
//   // 读取pathname下的所有文件或者文件夹
//   const files = fs.readdirSync(dirPath);
//   // 过滤掉
//   const items = intersections(files, WHITE_LIST);
//   // getList 函数后面会讲到
//   return getList(items, dirPath, pathname);
// };