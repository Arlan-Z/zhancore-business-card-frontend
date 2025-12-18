import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import type { Ref, ComputedRef } from 'vue'

export interface SliderOptions {
    cardWidth: number
    gap: number
    visibleCards: number
    autoPlayInterval: number
    transitionDuration: number
}

export function useSlider<T>(
    items: Ref<T[]> | ComputedRef<T[]>,
    options: SliderOptions
) {
    const { cardWidth, gap, visibleCards, autoPlayInterval, transitionDuration } = options

    const index = ref(visibleCards)
    const transitionEnabled = ref(true)
    let autoTimer: number | null = null

    const displayItems = computed(() => {
        const itemsArray = items.value // Access the reactive value
        if (itemsArray.length <= visibleCards) return itemsArray
        const frontClones = itemsArray.slice(-visibleCards)
        const endClones = itemsArray.slice(0, visibleCards)
        return [...frontClones, ...itemsArray, ...endClones]
    })

    const currentOffset = computed(() => index.value * (cardWidth + gap))

    const containerWidth = computed(() =>
        (cardWidth * visibleCards) + (gap * (visibleCards - 1))
    )

    const goNext = () => {
        if (items.value.length <= visibleCards) return // Use .value

        const resetPoint = items.value.length + visibleCards

        if (index.value >= resetPoint - 1) {
            index.value++

            setTimeout(() => {
                transitionEnabled.value = false
                index.value = visibleCards

                requestAnimationFrame(() => {
                    transitionEnabled.value = true
                })
            }, transitionDuration)

            return
        }

        index.value++
    }

    const goPrev = () => {
        if (items.value.length <= visibleCards) return

        if (index.value <= visibleCards) {
            index.value--

            setTimeout(() => {
                transitionEnabled.value = false
                index.value = items.value.length + visibleCards - 1

                requestAnimationFrame(() => {
                    transitionEnabled.value = true
                })
            }, transitionDuration)

            return
        }

        index.value--
    }

    const startAuto = () => {
        stopAuto()
        if (items.value.length > visibleCards) {
            autoTimer = window.setInterval(goNext, autoPlayInterval)
        }
    }

    const stopAuto = () => {
        if (autoTimer) {
            clearInterval(autoTimer)
            autoTimer = null
        }
    }

    onMounted(() => {
        if (items.value.length > visibleCards) {
            transitionEnabled.value = false
            index.value = visibleCards

            requestAnimationFrame(() => {
                transitionEnabled.value = true
                startAuto()
            })
        }
    })

    onBeforeUnmount(stopAuto)

    return {
        index,
        displayItems,
        currentOffset,
        containerWidth,
        transitionEnabled,
        goNext,
        goPrev,
        pauseAuto: stopAuto,
        resumeAuto: startAuto
    }
}