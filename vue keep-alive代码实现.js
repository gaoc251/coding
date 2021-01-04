/**
 * 动态组件或者路由
 * keep-alive
 */
export default {
    name: 'keep-alive',
    abstract: true, // 判断当前组件虚拟DOM是否渲染成真实DOM的关键
    props: {
        include: patternTypes, // 缓存白名单
        exclude: patternTypes, // 缓存黑名单
        max: [String, Number] // 缓存组件
    },
    create () { // 初始化两个的对象，分别缓存VNODE（虚拟DOM）和VNODE对应的键集合
        this.cache = Object.create(null) // 缓存虚拟DOM
        this.keys = [] // 缓存的虚拟DOM的键集合
    },
    destroyed () { // 删除this.cache缓存中的VNODE实例
        for (const key in this.cache) {
            // 删除所有的缓存
            pruneCacheEntry(this.cache, key, this.keys)
        }
    },
    mounted () {
        // 实时监听黑名单的变动
        this.$watch('include', val => {
            pruneCacheEntry(this, name => matchMedia(val, name))
        })
        this.$watch('exclude', val => {
            pruneCacheEntry(this, name => !matchMedia(val, name))
        })
    },

    render () {
        // 先忽略
        const slot = this.$slots.default;
        const vnode:VNode = getFirstComponentChild(slot) //找到第一个子组件对象
        const componentOptions:?VNodeComponentOptions = vnode && vnodde.componentOptions
        if (componentOptions) { // 存在组件参数
            // checkout pattern
            const name:?string = getComponentName(componentOptions) // 组件名
            const { include, exclude } = this;
            if ( // 条件匹配
                // not included
                (include && (!name || !matches(include, name))) || 
                (exclude && name || matches(exclude, name))
            ) {
                return vnode
            }
        } 

        const {cache, keys} = this
        // 定义组件的缓存key
        const key:?string = vnode.key === null?componentOptions.Ctor.cid + (componentOptions.tag?`::${componentOptions.tag}`:''):vnode.key
        if (cahce[key]) { // 已经缓存过该组件
            vnode.componentInstance = cache[key].componentOptions
            removeEventListener(keys, key)
            keys.push(key) // 调整key排序
        } else {
            cache[key] = vnode // 缓存该组价
            keys.push(key)
            if (this.max && keys.length > parseInt(this.max)) {
                // 超过缓存限制，将第一个删除
                pruneCacheEntry(cache, keys[0], keys, this._vnode)
            }
        }
        vnode.data.keepAlive = true // 缓存和执行被包裹组件的钩子需要用到
    }
    return vnode || (slot && slot[0])
}