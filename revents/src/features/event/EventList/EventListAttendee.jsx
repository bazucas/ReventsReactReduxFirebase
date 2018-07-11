import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react'

class EventListAttendee extends Component {
    render() {
        return (
            <List.Item>
                <Image as="a" dize="mini" circular src="http://randomuser.me/api/portraits/women/42.jpg" />
            </List.Item>
        )
    }
}

export default EventListAttendee
