import { Bundle, ZObject } from 'zapier-platform-core'
import {
    composeUrl,
    subscribeHookCreator,
    unsubscribeHook,
    TRIGGER_PREMIUM_NOTICE_FIELD,
    ORGANIZATION_AND_PROJECTS_FIELDS,
} from '../utils'

function getActionPerformance(z: ZObject, bundle: Bundle) {
    return [bundle.cleanedRequest.data]
}

async function getFallbackRealActionPerformance(z: ZObject, bundle: Bundle) {
    const action_id = bundle.inputData.action_id
    const response = await z.request({
        url: composeUrl(['api', 'projects', bundle.inputData.project_id, 'events', `?action_id=${action_id}`], bundle),
    })
    return (response.data as { results: Record<string, any>[] }).results
}

export const ActionPerformedTrigger = {
    key: 'action_performed',
    noun: 'Action',

    display: {
        label: 'Action Performed',
        description: 'Triggers when an action is performed by a user.',
    },

    operation: {
        inputFields: [
            TRIGGER_PREMIUM_NOTICE_FIELD,
            ...ORGANIZATION_AND_PROJECTS_FIELDS,
            {
                key: 'action_id',
                label: 'Action',
                helpText:
                    'Make sure you have actions defined in /data-management/actions. [See PostHog Docs.](https://posthog.com/docs/data/actions)',
                required: true,
                dynamic: 'action_defined.id.name',
            },
        ],

        type: 'hook',

        performSubscribe: subscribeHookCreator('action_performed', { resource_id: 'action_id' }),
        performUnsubscribe: unsubscribeHook,

        perform: getActionPerformance,
        performList: getFallbackRealActionPerformance,

        sample: {
            id: 666,
            distinct_id: '867499ab-c4f6-4a0d-befb-9d82fad9a73f',
            properties: {
                $lib: 'web',
                $browser: 'Firefox',
                $current_url: 'https://example.comz/',
            },
            elements: [],
            event: 'purchase',
            timestamp: '1953-07-04T12:00:00.123456Z',
            person: '867499ab-c4f6-4a0d-befb-9d82fad9a73f',
        },
    },
}
