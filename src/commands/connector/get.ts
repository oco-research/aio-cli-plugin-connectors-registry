/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const aioLogger = require('@adobe/aio-lib-core-logging')('connector', { provider: 'debug' })
const { Command, Flags, CliUx } = require('@oclif/core')

class GetCommand extends Command {
  async run () {
    // const { args, flags } = await this.parse(IndexCommand)
    aioLogger.debug('this is the index command.')

    CliUx.ux.log('hello world')
    CliUx.ux.action.start('doing things')
    CliUx.ux.action.stop()
  }
}

GetCommand.flags = {
  name: Flags.string({ 
    char: 'n', 
    description: 'Name of the connector',
    required: true
  })
}

GetCommand.description = 'Command returns the content of specific connector'
GetCommand.examples = [
  '$ aio connector:get'
]

module.exports = GetCommand
